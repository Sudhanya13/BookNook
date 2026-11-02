import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLatestBooks } from "@/lib/books";
import BookCard from "@/components/book-card";
import { buttonVariants } from "@/components/ui/button";

// Server component: reads the mock catalog the same way a real page would
// read the database (sort newest-first, limit 6).
export default function NewArrivals() {
  const books = getLatestBooks(6);

  return (
    <section
      aria-labelledby="new-arrivals-heading"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6"
    >
      <div className="mb-10 max-w-2xl space-y-3">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Latest additions
        </p>
        <h2
          id="new-arrivals-heading"
          className="font-heading text-3xl font-bold tracking-tight"
        >
          New Arrivals
        </h2>
        <p className="text-muted-foreground">
          The six newest books to join the Nook — fresh on the shelf and ready
          to borrow.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/all-books"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          See All Books
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
