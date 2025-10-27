"use client"
import { motion } from "framer-motion"
import { fadeUp, stagger } from "../lib/animations"

const Pricing = () => {
    const plans = [
        {
            name: "Free Plan",
            description: "Free for personal payments.",
            price: "0",
            features: [
                "Up to 100 transections per month",
                "Basic proud protection",
                "Email support"
            ],
            buttonText: "Get Free Plan",
            buttonStyle: "border border-[#01081B] text-[#01081B] hover:bg-[#01081B] hover:text-white",
            cardStyle: "bg-white border border-[#E7E7E8]"
        },
        {
            name: "Advanced",
            description: "Minimal fees for advanced transactions",
            price: "19",
            features: [
                "Up to 1000 transections per month",
                "Advanced proud protection",
                "Detailed transaction reports",
                "Priority email & chat support"
            ],
            buttonText: "Get Advanced Plan",
            buttonStyle: "bg-[#2E68FD] text-white hover:bg-blue-600",
            cardStyle: "bg-[#01081B] text-white",
            popular: true
        },
        {
            name: "Business",
            description: "Premium business transactions",
            price: "29",
            features: [
                "Unlimited transections per month",
                "Premium proud protection",
                "Detailed transaction reports",
                "Priority email & chat support"
            ],
            buttonText: "Get Business Plan",
            buttonStyle: "border border-[#01081B] text-[#01081B] hover:bg-[#01081B] hover:text-white",
            cardStyle: "bg-white border border-[#E7E7E8]"
        }
    ]

    return (
        <section className="py-16 md:py-[120px] px-4 sm:px-8 md:px-[135px] bg-white relative">
            <div className="max-w-[1170px] mx-auto relative">
                <div
                    aria-hidden
                    className="absolute left-1/2 -translate-x-1/2 hidden md:block bottom-5 sm:bottom-10 md:bottom-12 w-[320px] sm:w-[420px] md:w-[500px] h-20 sm:h-24 md:h-28 rounded-full z-0 pointer-events-none"
                    style={{ background: 'var(--Secondary-Shades-80, #CD9BFF)', filter: 'blur(100px)' }}
                />
                <div className="text-center mb-8 md:mb-12 px-2">
                    <div className="mb-4">
                        <span className="text-sm md:text-[16px] font-semibold text-[#932EFA]">PRICING</span>
                    </div>
                    <h2 className="text-2xl md:text-[40px] font-bold leading-tight text-[#01081B]">
                        Simple transparent pricing <br className="hidden md:block" /> no hidden fees
                    </h2>
                </div>

                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                    {plans.map((plan, index) => (
                        <motion.div key={index} variants={fadeUp} className={`${plan.cardStyle} rounded-2xl p-4 md:p-6 flex flex-col`}>
                            <div className="mb-6">
                                <div className="mb-4">
                                    <h3 className={`text-lg md:text-[24px] font-bold mb-2 ${plan.popular ? 'text-white' : 'text-[#01081B]'}`}>
                                        {plan.name}
                                    </h3>
                                    <p className={`text-sm md:text-[16px] ${plan.popular ? 'text-[#B1B2B2]' : 'text-[#4D525F]'}`}>
                                        {plan.description}
                                    </p>
                                </div>
                                <div className={`text-sm md:text-[16px] text-[#B1B2B2] font-bold `}>
                                    <span className={`text-3xl md:text-[56px] ${plan.popular ? 'text-white' : 'text-[#01081B]'}`}>${plan.price}</span>/month
                                </div>
                            </div>

                            <div className={`h-px mb-6 ${plan.popular ? 'bg-linear-to-r from-gray-600 via-gray-500 to-gray-600' : 'bg-linear-to-r from-gray-200 via-gray-400 to-gray-200'}`}></div>

                            <div className="flex-1 mb-6">
                                {plan.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center gap-2 mb-4">
                                        {plan.popular === true ? <>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.3333 11.6667C23.3333 5.22338 18.11 4.19617e-05 11.6667 4.19617e-05C5.22334 4.19617e-05 0 5.22338 0 11.6667C0 18.11 5.22334 23.3334 11.6667 23.3334C18.11 23.3334 23.3333 18.11 23.3333 11.6667Z" fill="#26272C" />
                                                <path d="M7 12.25L9.91667 15.1666L16.3333 8.16663" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </> : <>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.3333 11.6667C23.3333 5.22338 18.11 4.19617e-05 11.6667 4.19617e-05C5.22334 4.19617e-05 0 5.22338 0 11.6667C0 18.11 5.22334 23.3334 11.6667 23.3334C18.11 23.3334 23.3333 18.11 23.3333 11.6667Z" fill="#ECF0FB" />
                                                <path d="M7 12.25L9.91667 15.1666L16.3333 8.16663" stroke="#2E68FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </>}
                                        <span className={`text-sm md:text-[16px] ${plan.popular ? 'text-[#B1B2B2]' : 'text-[#4D525F]'}`}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-3 md:py-4 px-4 md:px-6 rounded-full text-sm md:text-[16px] font-semibold transition-colors ${plan.buttonStyle}`}>
                                {plan.buttonText}
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Pricing
