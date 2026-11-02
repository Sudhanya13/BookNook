import Link from "next/link";
import { BookOpen, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 justify-self-start">
          <span className="grid size-9 place-items-center rounded-xl bg-foreground text-background">
            <BookOpen className="size-5" />
          </span>
          <span className="font-heading text-xl font-bold tracking-tight">
            BookNook
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          <li>
            <Link
              href="/"
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/all-books"
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              All Books
            </Link>
          </li>
          <li>
            <Link
              href="/add-book"
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Add Book
            </Link>
          </li>
          <li>
            <Link
              href="/my-books"
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              My Books
            </Link>
          </li>
          <li>
            <Link
              href="/my-borrows"
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              My Borrows
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2 justify-self-end sm:gap-4">
          <div className="hidden h-6 border-l border-border/70 sm:block" />
          <Button
            variant="ghost"
            size="lg"
            nativeButton={false}
            render={<Link href="/login" />}
          >
            <LogIn />
            Login
          </Button>
          <Button
            variant="default"
            nativeButton={false}
            size="lg"
            className="h-9 px-4"
            render={<Link href="/register" />}
          >
            <UserPlus />
            Register
          </Button>
        </div>
      </div>
    </nav>
  );
}
