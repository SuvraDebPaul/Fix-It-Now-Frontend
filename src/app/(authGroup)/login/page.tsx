"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { LoginForm } from "../../../features/auth/components/loginForm";
import Image from "next/image";

function RegisteredBanner() {
  const searchParams = useSearchParams();
  if (searchParams.get("registered") !== "1") return null;

  return (
    <p className="mb-4 rounded-lg bg-primary/15 px-4 py-2 text-center text-sm font-medium text-primary">
      Account created — please log in.
    </p>
  );
}

const LoginPage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[calc(100svh-var(--header-h))] overflow-hidden">
      {/* Background image — fills the parent (relative + sized) */}
      <Image
        src="/auth-bg.jpg"
        alt="Auth background"
        fill
        priority
        className="object-cover -z-10"
      />

      {/* Optional dark overlay so the form stays readable over the photo */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Form card — sits above the image, normal flow */}
      <div className="relative w-full max-w-md px-4">
        <Suspense fallback={null}>
          <RegisteredBanner />
        </Suspense>
        <div className="rounded-xl border border-white/20 bg-background/5 backdrop-blur-xl shadow-2xl shadow-black/20">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
