"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast"; // Updated import
import { getCategories } from "@/lib/books";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FIELD_CLASSES =
  "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm dark:bg-input/30";

export default function AddBookPage() {
  const categories = getCategories();
  const [added, setAdded] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Convert form data entries into a plain JavaScript object
    const data = Object.fromEntries(formData.entries());

    // 🔍 Console log submitted form data in browser
    console.log("Submitted Book Data:", data);

    try {
      const response = await fetch("http://localhost:5000/add-book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resultdata = await response.json();
      console.log("Server response:", resultdata);

      if (response.ok) {
        setAdded(data.title);
        form.reset();

        // react-hot-toast success syntax
        toast.success(
          `"${data.title}" has been successfully added to the shelf.`,
        );
      } else {
        toast.error(
          resultdata.message || "Failed to add book. Please try again.",
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Network Error: Could not connect to the server.");
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <div className="mb-8 space-y-3">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Grow the shelf
        </p>
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Add Book
        </h1>
        <p className="text-muted-foreground">
          Share a title with every reader of the Nook.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Book details</CardTitle>
          <CardDescription>
            Fill in the information that should appear on the book card.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {added ? (
              <p
                role="status"
                className="flex items-center gap-2 rounded-lg bg-emerald-600/10 px-3 py-2 text-sm font-medium text-emerald-700"
              >
                <CheckCircle2 className="size-4 shrink-0" />“{added}” was added
                to the shelf.
              </p>
            ) : null}

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                required
                placeholder="The Midnight Library"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                name="author"
                required
                placeholder="Matt Haig"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  name="category"
                  required
                  defaultValue=""
                  className={FIELD_CLASSES}
                >
                  <option value="" disabled>
                    Choose a category
                  </option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cover">Cover image URL</Label>
                <Input
                  id="cover"
                  name="cover"
                  type="url"
                  placeholder="/covers/cover-1.svg"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="One or two lines about the book…"
                className={`${FIELD_CLASSES} min-h-24 w-full rounded-lg px-2.5 py-2`}
              />
            </div>

            <div className="flex justify-end gap-2">
              <Button type="reset" variant="outline">
                Clear
              </Button>
              <Button type="submit">Add Book</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
