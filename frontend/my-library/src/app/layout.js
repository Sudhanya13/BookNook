import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { AuthProvider } from "@/lib/auth-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BookNook — Add a book, borrow a book, return a book",
  description:
    "BookNook is a small online library. Browse the catalogue, borrow a book for a few days, and return it when you are done.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Toaster position="top-right" />
        {/* <AuthProvider> */}
        {/* Not wrapped in Suspense: on statically prerendered routes the
              navbar's usePathname() is known at build time and renders into
              the static HTML. Routes that block prerendering (see
              `instant = false` in page files) resolve it per request. */}
        <Navbar />

        <main className="flex-1">{children}</main>
        <Footer />
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
