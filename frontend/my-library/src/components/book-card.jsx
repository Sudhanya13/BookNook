import Image from "next/image";
import Link from "next/link";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

export default function BookCard({ book }) {
  return (
    <Card className="group h-full gap-0 overflow-hidden pt-0 transition-shadow hover:shadow-md">
      <div className="relative aspect-[5/4] w-full overflow-hidden bg-muted">
        <Image
          src={book.cover}
          alt={`Cover of ${book.title}`}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <CardHeader className="flex-1 gap-2 pt-4">
        <span className="w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          {book.category}
        </span>
        <CardTitle className="line-clamp-2 text-base font-semibold">
          {book.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">by {book.author}</p>
      </CardHeader>

      <CardFooter>
        <Link
          href={`/all-books/${book.id}`}
          className={buttonVariants({ size: "sm", variant: "outline" })}
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
}
