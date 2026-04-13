// SERVER COMPONENT
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Contact — Swastika",
  description: "Hubungi saya untuk kolaborasi atau pertanyaan.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen dark:bg-gray-950 bg-white pt-24 pb-20 px-5">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono dark:text-gray-500 text-gray-500 dark:hover:text-white hover:text-gray-900 transition-colors mb-10">
          ← back
        </Link>

        <p className="text-xs font-mono text-accent tracking-widest mb-3">CONTACT</p>
        <h1 className="text-5xl font-display font-bold dark:text-white text-gray-900 mb-3">
          Hubungi Saya
        </h1>
        <p className="dark:text-gray-400 text-gray-600 text-lg mb-10">
          Ada pertanyaan atau ingin berkolaborasi? Kirimkan pesan di bawah ini.
        </p>

        {/* Quick links */}
        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl dark:bg-white/5 bg-gray-100 dark:border-white/10 border border-gray-200 dark:text-gray-300 text-gray-700 dark:hover:border-accent/40 hover:border-accent/60 transition-colors text-sm font-mono"
          >
            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl dark:bg-white/5 bg-gray-100 dark:border-white/10 border border-gray-200 dark:text-gray-300 text-gray-700 dark:hover:border-accent/40 hover:border-accent/60 transition-colors text-sm font-mono"
          >
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px dark:bg-white/10 bg-gray-200" />
          <span className="text-xs font-mono dark:text-gray-600 text-gray-400">atau kirim pesan</span>
          <div className="flex-1 h-px dark:bg-white/10 bg-gray-200" />
        </div>

        {/* Form — Client Component */}
        <ContactForm />
      </div>
    </main>
  );
}
