import Link from "next/link";
import { Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-blue px-6 text-center text-white">
      <Wrench className="h-12 w-12 text-primary" />
      <h1 className="mt-6 font-display text-8xl">404</h1>
      <h2 className="mt-2 font-display text-2xl uppercase">
        Oops! The Page Not Found.
      </h2>
      <p className="mt-4 max-w-md text-white/70">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back To Home</Link>
      </Button>
    </div>
  );
}
