"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <AlertTriangle className="h-10 w-10 text-destructive" />
      <h1 className="mt-4 text-xl font-semibold">Something Went Wrong</h1>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {error.message || "This page couldn't load. Please try again."}
      </p>
      <div className="mt-6 flex gap-3">
        <Button onClick={() => reset()}>Try Again</Button>
        <Button asChild variant="outline">
          <Link href="/">Back To Home</Link>
        </Button>
      </div>
    </div>
  );
}
