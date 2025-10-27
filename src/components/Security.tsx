"use client"
import { motion } from "framer-motion"
import { fadeUp } from "../lib/animations"

const Security = () => {
    const securityFeatures = [
        {
            icon: (
                <div className="w-7 h-7 bg-[#ECF0FB] rounded-full flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1L6.5 3.5H9L7 5.5L8 8L5 6.5L2 8L3 5.5L1 3.5H3.5L5 1Z" fill="#2E68FD"/>
                    </svg>
                </div>
            ),
            title: "Two-factor authentication",
            description: "Two-factor authentication ensures added protection by using verification steps."
        },
        {
            icon: (
                <div className="w-7 h-7 bg-[#FEEDED] rounded-full flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1L6.5 3.5H9L7 5.5L8 8L5 6.5L2 8L3 5.5L1 3.5H3.5L5 1Z" fill="#FC4343"/>
                    </svg>
                </div>
            ),
            title: "Fraud detection and alerts",
            description: "Fraud detection safeguards your money, sending instant alerts for any activity."
        },
        {
            icon: (
                <div className="w-7 h-7 bg-[#E5FCF2] rounded-full flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1L6.5 3.5H9L7 5.5L8 8L5 6.5L2 8L3 5.5L1 3.5H3.5L5 1Z" fill="#08A965"/>
                    </svg>
                </div>
            ),
            title: "Transaction notifications",
            description: "Instant notifications for transaction keep you informed to manage your finances."
        },
        {
            icon: (
                <div className="w-7 h-7 bg-[#E1F1F9] rounded-full flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1L6.5 3.5H9L7 5.5L8 8L5 6.5L2 8L3 5.5L1 3.5H3.5L5 1Z" fill="#3B7793"/>
                    </svg>
                </div>
            ),
            title: "Biometric access",
            description: "Easily and securely log in with biometric features, and facial recognition."
        },
        {
            icon: (
                <div className="w-7 h-7 bg-[#FAEEE2] rounded-full flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1L6.5 3.5H9L7 5.5L8 8L5 6.5L2 8L3 5.5L1 3.5H3.5L5 1Z" fill="#D77E1B"/>
                    </svg>
                </div>
            ),
            title: "End-to-end encryption",
            description: "By encryption, protecting your data from unauthorized access."
        },
        {
            icon: (
                <div className="w-7 h-7 bg-[#F4EDFC] rounded-full flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1L6.5 3.5H9L7 5.5L8 8L5 6.5L2 8L3 5.5L1 3.5H3.5L5 1Z" fill="#932EFA"/>
                    </svg>
                </div>
            ),
            title: "24/7 Protection support",
            description: "Our dedicated team is available around the clock to help you."
        }
    ]

    return (
        <section className="py-[120px] px-4 sm:px-8 md:px-[135px] bg-white">
            <div className="max-w-[1170px] mx-auto">
                <div className="mb-12">
                    <div className="mb-4">
                        <span className="text-[16px] font-semibold text-[#932EFA]">SECURITY</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                        <h2 className="text-[40px] font-bold leading-tight text-[#01081B] max-w-[511px] text-left">
                            We protect your money at every step with Easy Pay
                        </h2>
                        <p className="text-[16px] text-[#4D525F] max-w-[377px] text-left">
                            Easy Pay ensures your money is protected at every step with advanced encryption, real-time monitoring, and multi-factor authentication.
                        </p>
                    </div>
                </div>

                <div className="bg-[#F6F6F6] rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-linear-to-br from-blue-100 via-purple-50 to-pink-100"></div>
                    </div>
                    
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:justify-between items-start mb-6">
                            {securityFeatures.slice(0, 3).map((feature, index) => (
                                    <motion.div key={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className={`flex-1 px-6 relative text-center md:text-left ${index < 2 ? 'border-b md:border-b-0' : 'md:border-b-0'}`}>
                                        <div className="mb-4 mt-6">
                                            {feature.icon}
                                        </div>

                                        <div className="max-w-[300px] mx-auto">
                                            <h3 className="text-[20px] font-bold text-[#01081B] mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-[16px] text-[#4D525F] leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>

                                        {index < 2 && (
                                            <div className="hidden md:block absolute top-6 bottom-6 right-0 w-px bg-gray-200/60"></div>
                                        )}
                                    </motion.div>
                                ))}
                        </div>

                        <div className="flex flex-col md:flex-row md:justify-between items-start">
                            {securityFeatures.slice(3, 6).map((feature, index) => (
                                <motion.div key={index + 3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className={`flex-1 px-6 relative text-center md:text-left ${index < 2 ? 'border-b md:border-b-0' : 'md:border-b-0'}`}>
                                    <div className="mb-4 mt-6">
                                        {feature.icon}
                                    </div>

                                    <div className="max-w-[300px] mx-auto">
                                        <h3 className="text-[20px] font-bold text-[#01081B] mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[16px] text-[#4D525F] leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {index < 2 && (
                                        <div className="hidden md:block absolute top-6 bottom-6 right-0 w-px bg-gray-200/60"></div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Security
