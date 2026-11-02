// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { BookOpen, Check } from "lucide-react";
// // import { useAuth } from "@/lib/auth-context";
// import { Button, buttonVariants } from "@/components/ui/button";

// export default function BorrowButton() {
//   // const { user, ready } = useAuth();
//   const [borrowed, setBorrowed] = useState(false);

//   // if (!ready) {
//   //   return (
//   //     <div
//   //       className="h-9 w-40 animate-pulse rounded-lg bg-muted"
//   //       aria-hidden="true"
//   //     />
//   //   );
//   // }

//   // if (!user) {
//   //   return (
//   //     <Link href="/login" className={buttonVariants({ size: "lg" })}>
//   //       <BookOpen />
//   //       Log in to borrow
//   //     </Link>
//   //   );
//   }

//   if (borrowed) {
//     return (
//       <span className="inline-flex h-9 items-center gap-2 rounded-lg bg-emerald-600/10 px-4 text-sm font-medium text-emerald-700">
//         <Check className="size-4" />
//         Borrowed — see My Borrows
//       </span>
//     );
//   }

//   return (
//     <Button size="lg" onClick={() => setBorrowed(true)}>
//       <BookOpen />
//       Borrow Book
//     </Button>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";
import { BookOpen, Check } from "lucide-react";
// import { useAuth } from "@/lib/auth-context";
import { Button, buttonVariants } from "@/components/ui/button";

export default function BorrowButton() {
  // const { user, ready } = useAuth();
  const [borrowed, setBorrowed] = useState(false);

  // if (!ready) {
  //   return (
  //     <div
  //       className="h-9 w-40 animate-pulse rounded-lg bg-muted"
  //       aria-hidden="true"
  //     />
  //   );
  // }

  // if (!user) {
  //   return (
  //     <Link href="/login" className={buttonVariants({ size: "lg" })}>
  //       <BookOpen />
  //       Log in to borrow
  //     </Link>
  //   );
  // }

  if (borrowed) {
    return (
      <span className="inline-flex h-9 items-center gap-2 rounded-lg bg-emerald-600/10 px-4 text-sm font-medium text-emerald-700">
        <Check className="size-4" />
        Borrowed — see My Borrows
      </span>
    );
  }

  return (
    <Button size="lg" onClick={() => setBorrowed(true)}>
      <BookOpen />
      Borrow Book
    </Button>
  );
}
