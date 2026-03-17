import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

// GET latest updates (public)
export async function GET(req: Request) {
    const updates = await prisma.projectUpdate.findMany({
        orderBy: {
            date: 'desc'
        },
        take: 3
    });
    return NextResponse.json(updates);
}

// POST new update (protected)
export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { title, content } = await req.json();

        const update = await prisma.projectUpdate.create({
            data: {
                title,
                content
            }
        });

        return NextResponse.json(update);
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
// DELETE update (protected)
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

        await prisma.projectUpdate.delete({
            where: { id }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Error deleting update" }, { status: 500 });
    }
}
