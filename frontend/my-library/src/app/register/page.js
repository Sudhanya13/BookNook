// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { UserPlus } from "lucide-react";
// import { useAuth } from "@/lib/auth-context";
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

// export default function RegisterPage() {
//   const { register } = useAuth();
//   const router = useRouter();

//   function handleSubmit(event) {
//     event.preventDefault();
//     const form = new FormData(event.currentTarget);
//     register({
//       name: form.get("name"),
//       email: form.get("email"),
//       password: form.get("password"),
//       photo: form.get("photo"),
//     });
//     router.push("/");
//   }

//   return (
//     <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-16 sm:px-6">
//       <Card className="w-full">
//         <CardHeader>
//           <CardTitle className="text-xl">Create your account</CardTitle>
//           <CardDescription>
//             Join the Nook to add books, borrow reads and track your borrows.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="name">Full name</Label>
//               <Input
//                 id="name"
//                 name="name"
//                 autoComplete="name"
//                 required
//                 placeholder="Alex Reader"
//               />
//             </div>

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
//                 autoComplete="new-password"
//                 required
//                 minLength={6}
//                 placeholder="••••••••"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="photo">Photo URL</Label>
//               <Input
//                 id="photo"
//                 name="photo"
//                 type="url"
//                 placeholder="https://i.pravatar.cc/100?img=12"
//               />
//               <p className="text-xs text-muted-foreground">
//                 Optional — shown in the navbar. Without it we use your
//                 initials.
//               </p>
//             </div>

//             <Button type="submit" className="w-full">
//               <UserPlus />
//               Register
//             </Button>
//           </form>

//           <p className="mt-4 text-center text-sm text-muted-foreground">
//             Already have an account?{" "}
//             <Link
//               href="/login"
//               className="font-medium text-foreground underline-offset-4 hover:underline"
//             >
//               Login
//             </Link>
//           </p>
//         </CardContent>
//       </Card>

//       <p className="mt-4 text-center text-xs text-muted-foreground">
//         Accounts live only in this browser — this is a frontend demo.
//       </p>
//     </div>
//   );
// }
