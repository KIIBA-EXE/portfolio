import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        const { name, email, content } = await req.json();

        if (!name || !email || !content) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        const newMessage = await prisma.message.create({
            data: {
                name,
                email,
                content,
            },
        });

        return NextResponse.json(newMessage);
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}

export async function GET(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const messages = await prisma.message.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    return NextResponse.json(messages);
}

export async function DELETE(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ error: "Missing ID" }, { status: 400 });
        }

        await prisma.message.delete({
            where: { id }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Error deleting message" }, { status: 500 });
    }
}
