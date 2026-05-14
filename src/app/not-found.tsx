import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-lg">
        <p className="text-indigo-600 font-semibold tracking-widest uppercase text-xs mb-4">
          404 Error
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Page not found
        </h1>
        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}