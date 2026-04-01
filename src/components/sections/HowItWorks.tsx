"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { PhoneIncoming, BrainCircuit, CalendarCheck } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const steps = [
    {
        number: "01",
        icon: <PhoneIncoming className="w-7 h-7 text-indigo-600" />,
        title: "A Call Comes In",
        subtitle: "Instant Pick-up",
        description: "Your AI employee answers in under 2 seconds. No hold music, no voicemail, no missed opportunities.",
        bg: "bg-indigo-50", border: "border-indigo-100", iconBg: "bg-indigo-100",
    },
    {
        number: "02",
        icon: <BrainCircuit className="w-7 h-7 text-sky-600" />,
        title: "It Solves the Request",
        subtitle: "Intelligent Resolution",
        description: "Your AI understands context, checks inventory, answers FAQs, and handles complex requests in seconds.",
        bg: "bg-sky-50", border: "border-sky-100", iconBg: "bg-sky-100",
    },
    {
        number: "03",
        icon: <CalendarCheck className="w-7 h-7 text-emerald-600" />,
        title: "Your Calendar Fills Itself",
        subtitle: "Automated Scheduling",
        description: "Appointments get booked in real-time, synced to your calendar, and confirmed via SMS automatically.",
        bg: "bg-emerald-50", border: "border-emerald-100", iconBg: "bg-emerald-100",
    },
];

function StepCard({ step }: { step: typeof steps[0] }) {
    return (
        <div className={`relative ${step.bg} border ${step.border} rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl h-full`}>
            <div className="flex items-center justify-between mb-8">
                <span className="text-5xl font-black text-black/5 select-none">{step.number}</span>
                <div className={`w-14 h-14 rounded-2xl ${step.iconBg} flex items-center justify-center`}>{step.icon}</div>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">{step.subtitle}</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
            <p className="text-gray-500 leading-relaxed text-base">{step.description}</p>
        </div>
    );
}

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <p className="text-indigo-600 font-semibold tracking-widest uppercase text-xs mb-4">How It Works</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">The 3-Step Customer Journey</h2>
                    <p className="text-gray-500 text-lg leading-relaxed">From the moment a call comes in to a booked appointment — fully automated, always on.</p>
                </div>

                {/* Desktop Grid with Staggered Animations */}
                <StaggerContainer className="hidden md:grid md:grid-cols-3 gap-6 relative">
                    <div className="absolute top-14 left-[calc(16.666%+2rem)] right-[calc(16.666%+2rem)] h-px bg-gradient-to-r from-indigo-200 via-sky-200 to-emerald-200 z-0" />
                    {steps.map((step, i) => (
                        <StaggerItem key={i}>
                            <div className="relative z-10 h-full">
                                <StepCard step={step} />
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Mobile Swiper */}
                <StaggerContainer className="md:hidden">
                    <StaggerItem>
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={16}
                            slidesPerView={1.15}
                            centeredSlides
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                            className="pb-10"
                        >
                            {steps.map((step, i) => (
                                <SwiperSlide key={i}>
                                    <StepCard step={step} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </StaggerItem>
                </StaggerContainer>
            </div>
        </section>
    );
}
