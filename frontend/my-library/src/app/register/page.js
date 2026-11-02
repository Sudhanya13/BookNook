"use client";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { RegisterForm } from "@/components/Register-form";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function RegisterPage() {
  const handleEmailSignup = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      photoURL: formData.get("photoURL"),
      password: formData.get("password"),
    };

    // console.log(userData);
    const { data, error } = await authClient.signUp.email(userData);
    if (data) {
      // console.log(data);
      redirect("/");
    }

    if (error) {
      console.error("Signup error:", error);
      return;
    }

    console.log("User:", data.user);
    console.log("Token:", data.token);
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

        <RegisterForm onSubmit={handleEmailSignup} />
      </div>
    </div>
  );
}
