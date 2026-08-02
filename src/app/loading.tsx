"use client";

import { Atom } from "react-loading-indicators";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Atom
        color="#000000"
        size="large"
        text="Loading..."
        textColor="#000000"
      />
    </div>
  );
}
