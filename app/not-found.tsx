import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
            <p className="mb-8 text-zinc-400">Could not find requested resource</p>
            <Link
                href="/"
                className="px-6 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform"
            >
                Return Home
            </Link>
        </div>
    );
}
