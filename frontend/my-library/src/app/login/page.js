"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { redirect } from "next/navigation";

import { LoginForm } from "@/components/LoginForm";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const handleEmailLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const { data, error } = await authClient.signIn.email(userData);

    if (data) {
      redirect("/");
    }

    if (error) {
      console.error("Login error:", error);
      return;
    }
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium transition-opacity hover:opacity-90"
        >
          <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <BookOpen className="size-4" />
          </div>

          <span className="text-lg font-bold tracking-tight">BookNook</span>
        </Link>

        <LoginForm onSubmit={handleEmailLogin} />
      </div>
    </div>
  );
}
