import Link from "next/link"

export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-900 via-grey to-zinc-800">
            <div className="w-full max-w-lg p-8 bg-white/60 backdrop-blur rounded-xl shadow-md border border-sky-100">
                <h1 className="text-2xl font-semibold text-sky-800 mb-2">Welcome</h1>
                <p className="text-sm text-sky-600 mb-6">Choose a page:</p>

                <nav className="grid gap-3">
                    <Link
                        href="/blog"
                        className="block px-4 py-3 bg-sky-600 text-white rounded-lg text-center hover:bg-sky-700 transition"
                    >
                        Blog
                    </Link>

                    <Link
                        href="/products"
                        className="block px-4 py-3 bg-sky-50 text-sky-700 rounded-lg text-center border border-sky-100 hover:bg-sky-100 transition"
                    >
                        Products
                    </Link>

                    <Link
                        href="/article/breaking-news-123?lang=en"
                        className="block px-4 py-3 bg-emerald-600 text-white rounded-lg text-center hover:bg-emerald-700 transition"
                    >
                        Read in English
                    </Link>

                    <Link
                        href="/article/breaking-news-123?lang=fr"
                        className="block px-4 py-3 bg-rose-600 text-white rounded-lg text-center hover:bg-rose-700 transition"
                    >
                        Read in French
                    </Link>
                </nav>
            </div>
        </main>
    )
}