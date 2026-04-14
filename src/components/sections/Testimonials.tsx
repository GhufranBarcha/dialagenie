"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        quote: "The setup was straightforward, and our team had a clear call flow in place quickly.",
        author: "Early customer",
        role: "Home Services"
    },
    {
        quote: "We finally have a reliable way to handle after-hours calls and follow-ups without extra admin overhead.",
        author: "Pilot user",
        role: "Healthcare Front Desk"
    },
    {
        quote: "The calendar handoff and message capture flow made our inbound process much more consistent.",
        author: "Pilot user",
        role: "Real Estate Team"
    }
];

function TestimonialCard({ test }: { test: typeof testimonials[0] }) {
    return (
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between h-full hover:shadow-md transition-shadow">
            <p className="text-gray-600 text-lg italic mb-8 font-medium">&quot;{test.quote}&quot;</p>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-lg shrink-0">
                    {test.author.charAt(0)}
                </div>
                <div>
                    <p className="font-bold text-gray-900">{test.author}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">{test.role}</p>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-indigo-600 font-semibold tracking-widest uppercase text-xs mb-4">Real-World Use Cases</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Built for teams that cannot miss calls.</h2>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-8">
                    {testimonials.map((test, i) => <TestimonialCard key={i} test={test} />)}
                </div>

                {/* Mobile Swiper */}
                <div className="md:hidden">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={16}
                        slidesPerView={1.1}
                        centeredSlides
                        pagination={{ clickable: true }}
                        className="pb-10"
                    >
                        {testimonials.map((test, i) => (
                            <SwiperSlide key={i}>
                                <TestimonialCard test={test} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
