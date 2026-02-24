import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 text-center">
      <h1 className="text-7xl font-extralight text-foreground/10 mb-6">404</h1>
      <p className="text-xs uppercase tracking-[0.3em] text-muted mb-10">
        Page not found
      </p>
      <Link
        href="/"
        className="text-xs uppercase tracking-[0.15em] text-muted hover:text-foreground transition-colors duration-300"
      >
        Back to home
      </Link>
    </div>
  );
}
