"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const plans = [
    {
        name: "Starter",
        for: "For solopreneurs",
        price: "$99",
        billingSuffix: "per month",
        priceClassName: "text-4xl md:text-5xl",
        features: ["200 Mins of AI Calls", "1 Phone Number", "Email Support", "Basic Scripting"],
        highlighted: false,
        buttonVariant: "outline" as const,
        buttonText: "Get Started"
    },
    {
        name: "Professional",
        for: "For growing businesses",
        price: "$249",
        billingSuffix: "per month",
        priceClassName: "text-4xl md:text-5xl",
        features: ["800 Mins of AI Calls", "Calendar Integration", "Live Call Transfers", "Custom AI Voice & Persona", "Priority Support"],
        highlighted: true,
        buttonVariant: "primary" as const,
        buttonText: "Start Free Trial"
    },
    {
        name: "Enterprise",
        for: "For high-volume centers",
        price: "$499+",
        billingSuffix: "per month",
        priceClassName: "text-4xl md:text-5xl",
        features: ["Custom Pricing", "Unlimited AI Mins", "Multiple Phone Numbers", "API & Webhook Access", "Dedicated Success Manager", "Custom Integrations"],
        highlighted: false,
        buttonVariant: "outline" as const,
        buttonText: "Contact Sales"
    }
];

function PricingCard({ plan }: { plan: typeof plans[0] }) {
    const priceClassName = plan.priceClassName ?? "text-4xl md:text-5xl";

    if (plan.highlighted) {
        return (
            <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl relative md:scale-105 border border-gray-800 z-10 flex flex-col h-full">
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                    <span className="bg-indigo-600 text-white text-[10px] md:text-xs font-bold px-3 md:px-4 py-1.5 rounded-full uppercase tracking-wide shadow-lg">Most Popular</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2 min-w-[120px]">{plan.name}</h4>
                <p className="text-gray-400 mb-6 font-medium text-sm md:text-base">{plan.for}</p>
                <div className="mb-8">
                    <p className={`${priceClassName} whitespace-nowrap leading-none tracking-tight font-extrabold text-white`}>{plan.price}<sup className="ml-1 text-xl md:text-2xl">*</sup></p>
                    {plan.billingSuffix && <p className="text-sm text-gray-400 font-medium">per month</p>}
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300 font-medium text-sm md:text-base">
                            <Check className="w-5 h-5 text-indigo-400 shrink-0" /> {f}
                        </li>
                    ))}
                </ul>
                <Button variant={plan.buttonVariant} size="lg" className="w-full bg-indigo-600 hover:bg-indigo-500 font-bold text-white border-0">{plan.buttonText}</Button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
            <h4 className="text-xl font-bold text-gray-900 mb-2 min-w-[120px]">{plan.name}</h4>
            <p className="text-gray-500 mb-6 font-medium text-sm md:text-base">{plan.for}</p>
            <div className="mb-8">
                <p className={`${priceClassName} whitespace-nowrap leading-none tracking-tight font-extrabold text-gray-900`}>{plan.price}<sup className="ml-1 text-xl md:text-2xl">*</sup></p>
                {plan.billingSuffix && <p className="text-sm text-gray-400 font-medium">per month</p>}
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 font-medium text-sm md:text-base">
                        <Check className="w-5 h-5 text-green-500 shrink-0" /> {f}
                    </li>
                ))}
            </ul>
            <Button variant={plan.buttonVariant} size="lg" className="w-full font-bold">{plan.buttonText}</Button>
        </div>
    );
}

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-indigo-600 font-semibold tracking-wider uppercase text-xs md:text-sm mb-3">Simple Pricing</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-gray-900">Hire your best employee today.</h3>
                </div>

                {/* Desktop Grid with Staggered Reveal */}
                <StaggerContainer className="hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
                    {plans.map((plan, i) => (
                        <StaggerItem key={i}>
                            <PricingCard plan={plan} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Mobile Swiper */}
                <StaggerContainer className="md:hidden">
                    <StaggerItem>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={16}
                            slidesPerView={1.15}
                            centeredSlides
                            initialSlide={1}
                            pagination={{ clickable: true }}
                            className="pt-6 pb-12"
                        >
                            {plans.map((plan, i) => (
                                <SwiperSlide key={i} className="h-auto">
                                    <PricingCard plan={plan} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </StaggerItem>
                </StaggerContainer>

                <div className="mt-10 text-center max-w-3xl mx-auto space-y-3">
                    <p className="text-sm md:text-base text-gray-500">
                        10% off with 6-month plan, 20% off with annual plan. <em>Prices are exclusive of GST.</em>
                    </p>
                    <p className="text-sm md:text-base text-gray-500">
                        * All plans include a one-time Setup fee of $199 (ex. GST).
                    </p>
                </div>
            </div>
        </section>
    );
}
