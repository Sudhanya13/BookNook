// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { LogIn } from "lucide-react";
// // import { useAuth } from "@/lib/auth-context";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// export default function LoginPage() {
//   // const { login } = useAuth();
//   const router = useRouter();
//   const [error, setError] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//     const form = new FormData(event.currentTarget);
//     const result = login(form.get("email"), form.get("password"));
//     if (result.ok) {
//       router.push("/");
//     } else {
//       setError(result.error);
//     }
//   }

//   return (
//     <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-16 sm:px-6">
//       <Card className="w-full">
//         <CardHeader>
//           <CardTitle className="text-xl">Welcome back</CardTitle>
//           <CardDescription>
//             Log in to borrow books, add titles and see your borrows.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {error ? (
//               <p
//                 role="alert"
//                 className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive"
//               >
//                 {error}
//               </p>
//             ) : null}

//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 placeholder="you@example.com"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 placeholder="••••••••"
//               />
//             </div>

//             <Button type="submit" className="w-full">
//               <LogIn />
//               Login
//             </Button>
//           </form>

//           <p className="mt-4 text-center text-sm text-muted-foreground">
//             New to BookNook?{" "}
//             <Link
//               href="/register"
//               className="font-medium text-foreground underline-offset-4 hover:underline"
//             >
//               Register
//             </Link>
//           </p>
//         </CardContent>
//       </Card>

//       <p className="mt-4 text-center text-xs text-muted-foreground">
//         Demo note: any email works — passwords are only checked for accounts
//         registered in this browser.
//       </p>
//     </div>
//   );
// }
