import Image from "next/image";
import { CheckCircle2, Users, PhoneCall } from "lucide-react";

const stats = [
    { label: "Businesses Served", value: "500+" },
    { label: "Calls Handled", value: "2M+" },
    { label: "Avg. Rating", value: "4.9★" },
];

export default function AboutUs() {
    return (
        <section id="about" className="py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-sky-100 opacity-60 blur-3xl rounded-full" />
                        <div className="relative rounded-3xl overflow-hidden border border-gray-100 aspect-square shadow-2xl">
                            <Image src="/about_us_ai.png" alt="AI and Human Collaboration" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
                        </div>

                        <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl px-6 py-4 flex items-center justify-between gap-4 shadow-lg">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <p className="text-xl font-extrabold text-gray-900">{stat.value}</p>
                                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-0.5">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="absolute -top-4 -right-4 bg-indigo-600 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2">
                            <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse" />
                            Live 24/7
                        </div>
                    </div>

                    <div>
                        <p className="text-indigo-600 font-semibold tracking-widest uppercase text-xs mb-4">About Us</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                            {"We're"} redefining how businesses communicate.
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-10">
                            At Dial a Genie, we believe every missed call is a missed opportunity. Our mission is to give growing businesses the same enterprise-grade AI tools that Fortune 500 companies use — at a fraction of the cost.
                        </p>

                        <ul className="space-y-4 mb-12">
                            {[
                                { icon: <PhoneCall className="w-5 h-5 text-indigo-600" />, text: "Built specifically for modern growing businesses.", bg: "bg-indigo-50" },
                                { icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />, text: "Seamless integration with your existing tools and calendars.", bg: "bg-emerald-50" },
                                { icon: <Users className="w-5 h-5 text-sky-600" />, text: "No technical knowledge or training ever required.", bg: "bg-sky-50" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4">
                                    <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>{item.icon}</div>
                                    <span className="text-gray-700 font-medium text-base">{item.text}</span>
                                </li>
                            ))}
                        </ul>

                        <a href="#contact" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-indigo-200 active:scale-[0.98]">
                            Get Started Today →
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
