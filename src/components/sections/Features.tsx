"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Globe, CalendarDays, MessageSquare, FileText, PhoneForwarded, ShieldCheck, Zap } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const features = [
    { icon: <PhoneForwarded className="w-6 h-6 text-indigo-600" />, title: "Instant Call Transfers", description: "Routes urgent calls directly to your cell or team based on your custom rules.", badge: "Most Used", bg: "bg-indigo-50", border: "border-indigo-100" },
    { icon: <Globe className="w-6 h-6 text-sky-600" />, title: "30+ Languages", description: "Speaks natively in over 30 languages with zero accent issues.", badge: null, bg: "bg-sky-50", border: "border-sky-100" },
    { icon: <MessageSquare className="w-6 h-6 text-emerald-600" />, title: "SMS Automations", description: "Instantly texts callers booking links, pricing sheets, or key information post-call.", badge: null, bg: "bg-emerald-50", border: "border-emerald-100" },
    { icon: <CalendarDays className="w-6 h-6 text-violet-600" />, title: "24/7 Calendar Sync", description: "Integrates with Google Calendar & Outlook to book without ever double-booking.", badge: null, bg: "bg-violet-50", border: "border-violet-100" },
    { icon: <Zap className="w-6 h-6 text-amber-500" />, title: "Instant Setup", description: "Up and answering calls in under 5 minutes. No developers, no IT, no headaches.", badge: null, bg: "bg-amber-50", border: "border-amber-100" },
    { icon: <FileText className="w-6 h-6 text-cyan-600" />, title: "Call Logs & Transcripts", description: "Access a personalized dashboard with timestamped call logs and full transcripts for every call.", badge: null, bg: "bg-cyan-50", border: "border-cyan-100" },
    { icon: <ShieldCheck className="w-6 h-6 text-rose-600" />, title: "Enterprise Security", description: "Encrypted data in transit and at rest, built on trusted voice infrastructure partners.", badge: null, bg: "bg-rose-50", border: "border-rose-100" },
];

function FeatureCard({ feat }: { feat: typeof features[0] }) {
    return (
        <div className={`group relative ${feat.bg} border ${feat.border} rounded-3xl p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full`}>
            {feat.badge && (
                <span className="absolute top-5 right-5 bg-indigo-100 text-indigo-600 border border-indigo-200 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">{feat.badge}</span>
            )}
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feat.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{feat.title}</h3>
            <p className="text-gray-500 leading-relaxed">{feat.description}</p>
        </div>
    );
}

export default function Features() {
    return (
        <section id="features" className="py-28 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-indigo-600 font-semibold tracking-widest uppercase text-xs mb-4">Enterprise Capabilities</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">Everything you need to scale.</h2>
                    <p className="text-gray-500 text-lg">Built for modern businesses that refuse to let a single call go unanswered.</p>
                </div>

                {/* Desktop Bento Grid with Staggered Entrance */}
                <StaggerContainer className="hidden md:grid md:grid-cols-3 gap-5">
                    {features.map((feat, i) => (
                        <StaggerItem key={i} className={feat.title === "Instant Call Transfers" || feat.title === "Enterprise Security" ? "md:col-span-2" : ""}>
                            <FeatureCard feat={feat} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Mobile Swiper (Stagger container wrapping the whole swiper) */}
                <StaggerContainer className="md:hidden">
                    <StaggerItem>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={16}
                            slidesPerView={1.15}
                            centeredSlides
                            pagination={{ clickable: true }}
                            className="pb-10"
                        >
                            {features.map((feat, i) => (
                                <SwiperSlide key={i}>
                                    <FeatureCard feat={feat} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </StaggerItem>
                </StaggerContainer>
            </div>
        </section>
    );
}
