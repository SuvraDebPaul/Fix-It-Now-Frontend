import React from "react";
import { RegisterForm } from "../../../features/auth/components/registerForm";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[calc(100vh-var(--header-h))] overflow-hidden">
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
      <div className="relative w-full max-w-lg px-4">
        <div className="rounded-xl border border-white/20 bg-background/5 backdrop-blur-xl shadow-2xl shadow-black/20">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
