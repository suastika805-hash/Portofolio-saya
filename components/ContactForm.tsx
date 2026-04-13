"use client";
// CLIENT COMPONENT — menggunakan useState untuk form validation

import { useState } from "react";

type FormData = { name: string; email: string; subject: string; message: string };
type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Nama tidak boleh kosong.";
    if (!form.email.trim()) e.email = "Email tidak boleh kosong.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Format email tidak valid.";
    if (!form.subject.trim()) e.subject = "Subjek tidak boleh kosong.";
    if (!form.message.trim()) e.message = "Pesan tidak boleh kosong.";
    else if (form.message.trim().length < 10) e.message = "Pesan terlalu singkat (min. 10 karakter).";
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl dark:bg-accent/5 bg-green-50 dark:border-accent/20 border border-green-200 p-10 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-display font-bold dark:text-white text-gray-900 mb-2">Pesan Terkirim!</h3>
        <p className="dark:text-gray-400 text-gray-600 text-sm mb-6">
          Terima kasih, <span className="text-accent">{form.name}</span>! Saya akan segera membalas.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
          className="text-sm font-mono text-accent hover:underline"
        >
          Kirim pesan lain
        </button>
      </div>
    );
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl dark:bg-white/5 bg-gray-50 border ${
      errors[field]
        ? "border-red-400 dark:border-red-500"
        : "dark:border-white/10 border-gray-200 dark:focus:border-accent focus:border-accent"
    } dark:text-white text-gray-900 dark:placeholder-gray-600 placeholder-gray-400 outline-none transition-colors text-sm font-mono`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-xs font-mono dark:text-gray-400 text-gray-600 mb-2 tracking-widest uppercase">Nama</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nama lengkap" className={inputClass("name")} />
        {errors.name && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-mono dark:text-gray-400 text-gray-600 mb-2 tracking-widest uppercase">Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="nama@email.com" className={inputClass("email")} />
        {errors.email && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.email}</p>}
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs font-mono dark:text-gray-400 text-gray-600 mb-2 tracking-widest uppercase">Subjek</label>
        <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Topik pesan" className={inputClass("subject")} />
        {errors.subject && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-mono dark:text-gray-400 text-gray-600 mb-2 tracking-widest uppercase">Pesan</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tuliskan pesan Anda..." className={`${inputClass("message")} resize-none`} />
        {errors.message && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-xl bg-accent text-gray-950 font-bold font-mono hover:bg-accent-dim active:scale-[0.99] transition-all duration-150 disabled:opacity-70 text-sm"
      >
        {loading ? "Mengirim..." : "Kirim Pesan →"}
      </button>
    </form>
  );
}
