"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Lock } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res?.error) {
                setError("Invalid credentials");
                return;
            }

            router.push("/admin");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen grid place-items-center bg-[#050505]">
            <div className="absolute top-8 left-8">
                <Link href="/" className="text-zinc-500 hover:text-white flex items-center gap-2 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Retour
                </Link>
            </div>
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl shadow-xl w-full max-w-md backdrop-blur-sm">
                <div className="text-center mb-8">
                    <div className="mx-auto w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-4">
                        <Lock className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-white">Admin Login</h1>
                    <p className="text-zinc-400 text-sm mt-2">Accès restreint au propriétaire</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Email"
                        className="p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-emerald-500 transition-colors"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className="p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-emerald-500 transition-colors"
                    />
                    <button className="bg-emerald-600 text-white font-bold cursor-pointer px-6 py-3 rounded-lg hover:bg-emerald-500 transition-colors">
                        Login
                    </button>

                    {error && (
                        <div className="bg-red-500/10 text-red-500 w-fit text-sm py-2 px-4 rounded-md mt-2 mx-auto border border-red-500/20">
                            {error}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
