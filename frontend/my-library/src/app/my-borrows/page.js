import Link from "next/link";
import { Bookmark } from "lucide-react";
// import PrivateRoute from "@/components/private-route";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "My Borrows — BookNook",
};

export default function MyBorrowsPage() {
  return (
    // <PrivateRoute>
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-8 space-y-3">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Your checkout desk
        </p>
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          My Borrows
        </h1>
        <p className="text-muted-foreground">
          Books you have borrowed, with their due dates.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed p-12 text-center">
        <span className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
          <Bookmark className="size-7" />
        </span>
        <div className="space-y-1">
          <h2 className="font-heading text-lg font-semibold">
            You haven’t borrowed anything yet
          </h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            Pick a book from the shelves, borrow it for a couple of weeks, and
            it will appear here.
          </p>
        </div>
        <Link href="/all-books" className={buttonVariants()}>
          Browse Books
        </Link>
      </div>
    </div>
    // </PrivateRoute>
  );
}
