"use client"
import { motion } from "framer-motion"
import { fadeUp, stagger } from "../lib/animations"

const FAQ = () => {
  const faqs = [
    {
      q: "How secure is Easy Pay?",
      a: "Easy Pay uses bank-grade encryption, multi-factor authentication, and continuous fraud monitoring to keep your funds and data safe."
    },
    {
      q: "How long does a transfer take?",
      a: "Most transfers are instant. Bank transfers may take 1-3 business days depending on the recipient's bank and currency."
    },
    {
      q: "Are there fees for transactions?",
      a: "We offer transparent pricing — some transfers are fee-free, while others depend on method and destination. See the pricing page for details."
    },
    {
      q: "Can I link multiple bank accounts?",
      a: "Yes — you can add multiple bank accounts and cards, then choose which one to use when making a payment or transfer."
    },
    {
      q: "How do refunds work?",
      a: "Refunds are processed to the original payment method. The time to appear depends on the provider — usually 3-7 business days."
    },
    {
      q: "Is there customer support?",
      a: "Yes, our support team is available 24/7 via in-app chat and email to help with any issues or questions."
    },
  ]

  return (
    <motion.section
      className="py-16 px-6 bg-white"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <div className="max-w-[980px] mx-auto">
        <div className="mb-8 text-center">
          <div className="mb-4">
            <span className="text-[14px] font-semibold text-[#932EFA]">FAQ</span>
          </div>
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#01081B] mb-2">Frequently asked questions</h2>
          <p className="text-[16px] text-[#4D525F] max-w-[720px] mx-auto">Answers to common questions about Easy Pay</p>
        </div>

        <motion.div className="space-y-4" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}>
          {faqs.map((f, i) => (
            <motion.details
              key={i}
              className="rounded-2xl border border-gray-100 p-6 bg-white shadow-sm"
              variants={fadeUp}
            >
              <summary className="cursor-pointer list-none text-[16px] font-semibold text-[#01081B] flex items-center justify-between">
                <span className="mr-4">{f.q}</span>
                <motion.span className="chev ml-4 inline-block" whileHover={{ rotate: 20 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                    <path d="M6 9l6 6 6-6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.span>
              </summary>
              <div className="mt-3 text-[15px] text-[#4D525F]">{f.a}</div>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default FAQ

