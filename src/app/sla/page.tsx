import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Service Level Agreement | Dial A Genie",
    description: "Service availability, support response times, and remedies for the Dial A Genie AI voice receptionist service.",
    alternates: { canonical: "/sla" },
};

export default function SLAPage() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-white">
            <Navbar />
            <section className="pt-32 pb-24 lg:pt-48">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-indigo-600 font-semibold tracking-wider uppercase text-xs md:text-sm mb-3">Legal</h2>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Service Level Agreement</h1>
                        <p className="text-gray-500 mt-4 text-sm md:text-base">Effective Date: May 14, 2026</p>
                    </div>

                    <div className="max-w-none text-gray-600 space-y-10">
                        <p className="text-base md:text-lg leading-relaxed">
                            This Service Level Agreement ("SLA") is incorporated into the Terms of Use between Lorem Herba Limited ("we," "us," or "our") and you ("User" or "you"). It applies to the "Dial A Genie" AI voice receptionist service (the "Service"). Capitalized terms not defined here have the meaning in the Terms.
                        </p>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">1. Scope</h2>
                            <p>This SLA covers the core Service components: AI agent availability, call handling, dashboard access, and integrations (e.g., calendars). It does not cover third-party services (e.g., VAPI, Twilio telephony) or User-configured elements.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">2. Service Availability</h2>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">2.1 Uptime Commitment</h3>
                            <p>We commit to a best-efforts availability model with priority-based response and resolution times. This reflects the nature of the service, which depends on multiple third-party AI and telephony providers that are continuously evolving.</p>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">2.2 Onboarding Period</h3>
                            <p>For all new accounts, the first 7 business days following go-live will be designated as an Onboarding and Optimisation Period. During this time, the AI agent will be fine-tuned to your specific business requirements. Any minor variations or issues during this period are a normal and expected part of configuring the agent to your business and will not be treated as a service failure. In most cases, no issues should arise, but this period exists as a precaution given the custom nature of each deployment.</p>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">2.3 Major Platform Outages</h3>
                            <p>Outages caused by upstream providers — including but not limited to VAPI, Twilio, OpenAI, Anthropic, Google, and Cloudflare — are outside our control and will be excluded from SLA obligations. These events are rare but can occur once or twice a year and may last anywhere from a few hours to a full day.</p>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">2.4 Scheduled Maintenance</h3>
                            <p>Any scheduled maintenance will be performed over weekends, and clients will be notified at least 48 hours in advance.</p>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">2.5 Monitoring</h3>
                            <p>We use industry-standard tools to track uptime.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">3. Support and Response Times</h2>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">3.1 Support Channels</h3>
                            <p>Email <a href="mailto:info@dialagenie.com" className="text-indigo-600 hover:underline">info@dialagenie.com</a> or in-dashboard chat where available (during business hours: 9am–5pm NZT/AEDT, Mon–Fri, excluding holidays).</p>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">3.2 Response Times</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong className="text-gray-900">High Priority / Critical Issues</strong> (Service fully down): Initial response within 24 hours; resolution target 48 hours.</li>
                                <li><strong className="text-gray-900">Medium / Low Priority</strong> (Minor issues): Response within 3 business days; resolution target 5–7 business days.</li>
                            </ul>
                            <p className="mt-4 text-sm text-gray-500"><em>In Australia, these align with consumer guarantees under Australian Consumer Law — remedies apply if we fail to meet reasonable expectations.</em></p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">4. Remedies for SLA Breaches</h2>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">4.1 Service Credits</h3>
                            <p>If Monthly Uptime is significantly impeded, service credits can be applied for on a case-by-case basis.</p>
                            <p className="mt-2">Credits apply to the next invoice or, if no renewal, as a refund. Maximum credits: 100% of one month's fees. Claim within 30 days of the affected month.</p>
                            <p className="mt-2">Service credits will not apply where downtime results from upstream provider failures, force majeure events, or industry-wide infrastructure incidents beyond our reasonable control.</p>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">4.2 Termination Right</h3>
                            <p>If uptime is significantly impacted for 3 consecutive months, you may terminate with 14 days' notice and receive a pro-rated refund.</p>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">4.3 Sole Remedy</h3>
                            <p>These credits are your exclusive remedy for SLA breaches, to the extent permitted by law (e.g., no exclusion of Australian Consumer Law remedies).</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">5. Exclusions and Limitations</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>No remedies for breaches due to your misuse, unauthorized modifications, or non-payment.</li>
                                <li>We may update this SLA with 30 days' notice; continued use constitutes acceptance.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">6. Governing Law</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong className="text-gray-900">For New Zealand users:</strong> New Zealand law.</li>
                                <li><strong className="text-gray-900">For Australian users:</strong> Laws of New South Wales.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                            <p className="mb-2">For questions or claims contact:</p>
                            <p><strong className="text-gray-900">David Feng</strong></p>
                            <p>Email: <a href="mailto:info@dialagenie.com" className="text-indigo-600 hover:underline">info@dialagenie.com</a></p>
                            <p>Phone: +64 21 338 986</p>
                        </section>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
