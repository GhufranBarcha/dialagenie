"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="text-center max-w-md">
        <p className="text-indigo-400 font-semibold tracking-widest uppercase text-xs mb-4">Error</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Something went wrong</h2>
        <p className="text-slate-400 mb-10 leading-relaxed">
          We encountered an unexpected error. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-bold rounded-full transition-all shadow-lg shadow-indigo-500/30"
        >
          Try again
        </button>
      </div>
    </div>
  );
}