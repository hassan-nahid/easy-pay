"use client"
import Image from "next/image"

import { useRef } from "react";
import Blob from "./ui/Blob";
import { motion } from "framer-motion"
import { fadeUp } from "../lib/animations"

const Testimonial = () => {
    const testimonials = [
        {
            name: "Ethan Williams",
            role: "Digital Marketing Specialist",
            avatar: "/assets/tesimonial/person1.png",
            content: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments."
        },
        {
            name: "Daniel Thompson",
            role: "Product Designer",
            avatar: "/assets/tesimonial/person2.png",
            content: "Discover a payment app focused on simplicity and transparency. Enjoy a seamless experience with no hidden fees, providing clarity and ease in every transaction. It's designed to put you in control of your payments."
        }
    ]

    const scrollRef = useRef<HTMLDivElement | null>(null)
    const wrapperRef = useRef<HTMLDivElement | null>(null)

    return (
        <section className="py-16 md:py-[120px] px-4 sm:px-8 md:px-[135px] bg-[#F6F6F6] relative">
            <div className="max-w-[1170px] mx-auto">
                <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                    <motion.div className="w-full md:w-1/2" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
                        <div className="mb-6">
                            <span className="text-[16px] font-semibold text-[#932EFA]">TESTIMONIAL</span>
                        </div>
                        <h2 className="text-2xl md:text-[40px] font-bold leading-tight text-[#01081B] max-w-full md:max-w-[420px] mb-6">
                            We&apos;ve build trust with reviews from real users
                        </h2>
                        <p className="text-sm md:text-[16px] text-[#4D525F] max-w-full md:max-w-[460px] mb-8">
                            Boost your credibility by featuring genuine testimonials from real users, showcasing their positive experiences and satisfaction with Monks Pay services.
                        </p>

                        <div className="flex items-center gap-4 mt-6">
                            <button
                                onClick={() => {
                                    const el = scrollRef.current
                                    if (!el) return
                                    const cardWidth = 360 + 24 
                                    el.scrollBy({ left: -cardWidth, behavior: "smooth" })
                                }}
                                aria-label="Previous testimonial"
                                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#4D525F]"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 18L9 12L15 6" stroke="#4D525F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button
                                onClick={() => {
                                    const el = scrollRef.current
                                    if (!el) return
                                    const cardWidth = 360 + 24
                                    el.scrollBy({ left: cardWidth, behavior: "smooth" })
                                }}
                                aria-label="Next testimonial"
                                className="w-12 h-12 rounded-full bg-[#0B1B2B] flex items-center justify-center text-white shadow-md"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 18L15 12L9 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>

                    <div className="w-full md:w-1/2 relative" ref={wrapperRef}>
                        <div className="absolute inset-0 flex items-center justify-start pointer-events-none">
                            <div className="hidden md:block w-[560px] h-[260px] bg-linear-to-r from-white/0 via-[#EDE6FF]/60 to-white/0 rounded-2xl blur-2xl opacity-60 transform translate-x-12"></div>
                        </div>

                        <div className="hidden md:hidden lg:block"><Blob wrapperRef={wrapperRef} containerRef={scrollRef} /></div>
                        <div className="relative">
                            <div
                                ref={scrollRef}
                                className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x md:snap-none"
                            >
                                {testimonials.map((testimonial, index) => (
                                    <motion.div key={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="min-w-[280px] sm:min-w-[360px] md:min-w-[419px] h-auto md:h-[300px] bg-white rounded-2xl px-5 py-6 md:px-6 md:py-8 shadow-md snap-start">
                                        <div className="flex gap-2 mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M8 1L10.5 5.5L16 6.5L12 10L13 16L8 13L3 16L4 10L0 6.5L5.5 5.5L8 1Z" fill="#FCBE1D" />
                                                </svg>
                                            ))}

                                        </div>

                                        <p className="text-[16px] text-[#4D525F] leading-relaxed mb-8">
                                            {testimonial.content}
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <div className="w-[52px] h-[52px] bg-[#F7F0FC] rounded-full flex items-center justify-center">
                                                <Image src={testimonial.avatar} alt="Testimonial Image" className="rounded-full" width={52} height={52} />
                                            </div>
                                            <div>
                                                <h4 className="text-[16px] font-semibold text-[#01081B]">{testimonial.name}</h4>
                                                <p className="text-[14px] text-[#4D525F]">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
