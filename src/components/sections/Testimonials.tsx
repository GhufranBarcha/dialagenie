"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        quote: "Dial a Genie completely changed our plumbing business. We stopped missing emergency calls at 2 AM, and our revenue jumped 30%.",
        author: "Mark T.", role: "Owner, Apex Plumbing"
    },
    {
        quote: "The voice is so realistic that our clients actually compliment Sarah on her friendly tone. They have no idea it's AI.",
        author: "Sarah J.", role: "Clinic Director"
    },
    {
        quote: "We were spending $3,500/mo on a dedicated receptionist. Now we spend a fraction of that and get zero missed appointments.",
        author: "David L.", role: "Real Estate Broker"
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
                    <p className="text-indigo-600 font-semibold tracking-widest uppercase text-xs mb-4">Social Proof</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Loved by 500+ Businesses</h2>
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
