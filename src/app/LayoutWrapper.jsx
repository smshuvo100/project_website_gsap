"use client";
import { useState } from "react";
import Loading from "./components/Loading";

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loading onComplete={() => setIsLoading(false)} />}
      <div style={{ display: isLoading ? "none" : "block" }}>{children}</div>
    </>
  );
}
