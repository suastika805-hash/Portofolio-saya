import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen dark:bg-gray-950 bg-white flex items-center justify-center px-5">
      <div className="text-center">
        <p className="text-8xl font-display font-bold text-accent/20 mb-4">404</p>
        <h1 className="text-2xl font-display font-bold dark:text-white text-gray-900 mb-3">
          Halaman tidak ditemukan
        </h1>
        <p className="dark:text-gray-500 text-gray-500 text-sm font-mono mb-8">
          Halaman yang kamu cari tidak ada atau sudah dipindahkan.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-gray-950 font-bold font-mono text-sm hover:bg-accent-dim transition-colors"
        >
          ← Kembali ke Home
        </Link>
      </div>
    </main>
  );
}
