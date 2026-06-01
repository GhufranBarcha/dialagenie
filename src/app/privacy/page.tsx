import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy | Dial A Genie",
    description: "How Dial A Genie collects, uses, discloses, and protects your personal information in connection with our AI voice receptionist service.",
    alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-white">
            <Navbar />
            <section className="pt-32 pb-24 lg:pt-48">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-indigo-600 font-semibold tracking-wider uppercase text-xs md:text-sm mb-3">Legal</h2>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Privacy Policy</h1>
                        <p className="text-gray-500 mt-4 text-sm md:text-base">Effective Date: May 14, 2026</p>
                    </div>

                    <div className="max-w-none text-gray-600 space-y-10">
                        <p className="text-base md:text-lg leading-relaxed">
                            This Privacy Policy explains how Lorem Herba Limited ("we," "us," or "our") collects, uses, discloses, and protects personal information in connection with the "Dial A Genie" AI voice receptionist Service (the "Service"). We are committed to complying with the New Zealand Privacy Act 2020 and the Australian Privacy Act 1988 (including the Australian Privacy Principles or "APPs").
                        </p>
                        <p className="text-base md:text-lg leading-relaxed">
                            This Policy applies to personal information collected from or about you as a user of the Service, including business owners, employees, and callers interacting with configured AI agents.
                        </p>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">1. Personal Information We Collect</h2>
                            <p className="mb-4">We collect:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong className="text-gray-900">Account Data:</strong> Name, email, business details, payment information (via Stripe).</li>
                                <li><strong className="text-gray-900">Configuration Data:</strong> Uploaded knowledge bases (e.g., FAQs, opening hours), calendar integrations.</li>
                                <li><strong className="text-gray-900">Call Data:</strong> Voice recordings, transcripts, caller details (e.g., phone numbers, names, queries), bookings.</li>
                                <li><strong className="text-gray-900">Usage Data:</strong> Logs, analytics (e.g., call volume, resolution rates).</li>
                                <li><strong className="text-gray-900">Device Data:</strong> IP addresses, browser types for dashboard access.</li>
                            </ul>
                            <p className="mt-4"><strong className="text-gray-900">For calls:</strong> We may record/transcribe for quality and training, with disclosure in greetings (e.g., "This call may be recorded").</p>
                            <p className="mt-2 text-sm text-gray-500"><em>In Australia: Collection complies with APP 3 (solicited, necessary); in NZ: Information Privacy Principles (IPPs) 1–4.</em></p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">2. How We Use Personal Information</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To provide the Service (e.g., train AI agents, handle calls/bookings).</li>
                                <li>For support, billing, and improvements (anonymized analytics).</li>
                                <li>To comply with laws or respond to requests.</li>
                            </ul>
                            <p className="mt-4">We do not use data for marketing without consent. AI processing may involve automated decisions (e.g., query routing), with transparency per APP 6 (Aus) and IPP 10 (NZ).</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">3. Disclosure of Personal Information</h2>
                            <p className="mb-4">We disclose to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Service providers (e.g., cloud hosts, with data processing agreements).</li>
                                <li>As required by law.</li>
                            </ul>
                            <p className="mt-4"><strong className="text-gray-900">Cross-border:</strong> Data may be stored in the US/EU; we ensure equivalent protections per APP 8 (Aus) and IPP 12 (NZ). No sales of data.</p>
                            <p className="mt-4"><strong className="text-gray-900">For call recordings:</strong> Disclosed only as needed; in Australia, state laws vary (e.g., one-party consent in most, all-party in NSW) — we require greeting disclosures.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">4. Security</h2>
                            <p>We use encryption, access controls, and regular audits to protect data (per APP 11/IPP 5). Report breaches promptly.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access, correct, or delete your data.</li>
                                <li>Opt-out of certain uses.</li>
                                <li>Complain to NZ Privacy Commissioner or Aus OAIC.</li>
                            </ul>
                            <p className="mt-4 text-sm text-gray-500"><em>In Aus: Rights under APPs 12–13; in NZ: IPPs 6–7.</em></p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">6. Retention</h2>
                            <p>Data retained as needed for the Service, then deleted/anonymized.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">7. Children</h2>
                            <p>Service not for under 18; no children's data collected knowingly.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">8. Changes</h2>
                            <p>We may update this Policy over time; continued use constitutes acceptance.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">9. Contact</h2>
                            <p className="mb-2"><strong className="text-gray-900">Data Protection Officer — David Feng</strong></p>
                            <p>Mobile: +64 21 338 986</p>
                            <p>Email: <a href="mailto:info@dialagenie.com" className="text-indigo-600 hover:underline">info@dialagenie.com</a></p>
                        </section>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
