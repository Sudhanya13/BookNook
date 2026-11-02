import Link from "next/link";
import { Library } from "lucide-react";
import PrivateRoute from "@/components/private-route";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "My Books — BookNook",
};

export default function MyBooksPage() {
  return (
    // <PrivateRoute>
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-8 space-y-3">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Your shelf
        </p>
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          My Books
        </h1>
        <p className="text-muted-foreground">
          The books you have added to BookNook.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed p-12 text-center">
        <span className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
          <Library className="size-7" />
        </span>
        <div className="space-y-1">
          <h2 className="font-heading text-lg font-semibold">
            No books added yet
          </h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            Books you add from the Add Book page will show up here, ready for
            other readers to borrow.
          </p>
        </div>
        <Link href="/add-book" className={buttonVariants()}>
          Add Your First Book
        </Link>
      </div>
    </div>
    // </PrivateRoute>
  );
}
