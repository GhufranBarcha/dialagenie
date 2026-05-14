"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = {
      first_name: (form.elements.namedItem("first_name") as HTMLInputElement).value,
      last_name: (form.elements.namedItem("last_name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-indigo-50 border border-indigo-200 rounded-3xl p-8 md:p-10 text-center">
        <p className="text-indigo-700 font-bold text-xl mb-2">Message sent!</p>
        <p className="text-indigo-600">We will get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="first_name" className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">First Name</label>
          <input type="text" id="first_name" name="first_name" autoComplete="given-name" placeholder="John" required className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium" />
        </div>
        <div>
          <label htmlFor="last_name" className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Last Name</label>
          <input type="text" id="last_name" name="last_name" autoComplete="family-name" placeholder="Smith" required className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Work Email</label>
        <input type="email" id="email" name="email" autoComplete="email" placeholder="john@company.com" required className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium" />
      </div>
      <div>
        <label htmlFor="company" className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Company Name</label>
        <input type="text" id="company" name="company" autoComplete="organization" placeholder="Your Business" className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium" />
      </div>
      <div>
        <label htmlFor="message" className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Message</label>
        <textarea id="message" name="message" placeholder="Tell us about your business and what you need..." rows={4} required className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium resize-none" />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl flex items-center justify-center gap-3 transition-all duration-200 shadow-lg shadow-indigo-200"
      >
        {isSubmitting ? "Sending..." : "Request Your Demo"} <ArrowRight className="w-5 h-5" />
      </button>
      <p className="text-gray-400 text-sm text-center font-medium">No credit card required. No contracts.</p>
    </form>
  );
}