"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeUp } from "../lib/animations"

const Footer = () => {
    const footerLinks = {
        short: [
            { name: "Features", href: "/features" },
            { name: "How it works", href: "/how-it-works" },
            { name: "Security", href: "/security" },
            { name: "Testimonial", href: "/testimonial" }
        ],
        pages: [
            { name: "Privacy policy", href: "/privacy" },
            { name: "Terms & conditions", href: "/terms" },
            { name: "404", href: "/404" }
        ]
    }

    return (
        <motion.footer className="pb-8 bg-white relative overflow-hidden px-4 sm:px-8 md:px-[135px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
        >
            <div
                className="absolute left-1/2 -translate-x-1/2 pointer-events-none w-[320px] sm:w-[420px] md:w-[472px] h-[220px] sm:h-[300px] md:h-[351px] rounded-full"
                style={{
                    bottom: "-120px",
                    background: "var(--Secondary-Shades-80, #CD9BFF)",
                    filter: "blur(100px)",
                    opacity: 0.25
                }}
            />
            
            <div className="max-w-[1170px] mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between items-start gap-8 mb-8">
                    <motion.div className="w-full md:w-[278px] text-center md:text-left" variants={fadeUp}>
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                            <Image 
                                src="/assets/logo/logo.png" 
                                alt="Easy Pay Logo" 
                                width={40} 
                                height={40}
                                className="w-10 h-10 md:w-20 md:h-20"
                            />
                            <span className="text-2xl md:text-[28px] font-bold text-[#01081B]">Easy Pay</span>
                        </div>
                        <p className="text-sm md:text-[16px] text-[#4D525F] leading-relaxed max-w-full md:max-w-[278px] mx-auto md:mx-0">
                            Easy Pay offers secure, seamless, and fee-free payments for effortless global transactions.
                        </p>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-[100px] w-full md:w-auto justify-center">
                        <div className="text-center sm:text-left">
                            <h4 className="text-[18px] md:text-[20px] font-bold text-[#01081B] mb-4">Short links</h4>
                            <div className="space-y-3">
                                {footerLinks.short.map((link, index) => (
                                    <Link key={index} href={link.href}>
                                        <motion.span className="block text-sm md:text-[16px] text-[#4D525F] hover:text-[#2E68FD] transition-colors"
                                            whileHover={{ x: 4 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {link.name}
                                        </motion.span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="text-center sm:text-left">
                            <h4 className="text-[18px] md:text-[20px] font-bold text-[#01081B] mb-4">Other pages</h4>
                            <div className="space-y-3">
                                {footerLinks.pages.map((link, index) => (
                                    <Link key={index} href={link.href}>
                                        <motion.span className="block text-sm md:text-[16px] text-[#4D525F] hover:text-[#2E68FD] transition-colors"
                                            whileHover={{ x: 4 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {link.name}
                                        </motion.span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-linear-to-r from-gray-200 via-gray-400 to-gray-200 mb-8"></div>

                <div className="text-center">
                    <p className="text-[16px] text-[#878787] font-light">
                        2024 ©Easy Pay. All rights reserved. Fintech Landing Page by MUHIB
                    </p>
                </div>
            </div>
    </motion.footer>
    )
}

export default Footer
