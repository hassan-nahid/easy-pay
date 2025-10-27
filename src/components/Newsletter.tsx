"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { fadeUp, hoverScale } from "../lib/animations"

const Newsletter = () => {
  const [email, setEmail] = useState("")

  return (
    <motion.section
      className="py-16 px-6 bg-white"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
    >
      <div className="max-w-[980px] mx-auto text-center">
        <div className="mb-6">
          <span className="text-[16px] font-semibold text-[#932EFA]">NEWSLETTER</span>
        </div>
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#01081B] mb-4">
          Stay up to date with Easy Pay
        </h2>
        <p className="text-[16px] text-[#4D525F] max-w-[720px] mx-auto mb-8">
          Get product updates, feature releases, and tips delivered to your inbox. We&apos;ll only send the good stuff.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            // placeholder behavior — replace with API call when ready
            alert(`Thanks — ${email} has been subscribed.`)
            setEmail("")
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-[700px] mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full sm:flex-1 border border-gray-200 rounded-full px-5 py-3 text-[16px]"
          />
          <motion.button
            type="submit"
            className="rounded-full bg-[#2E68FD] text-white px-6 py-3 text-[16px] font-semibold"
            variants={hoverScale}
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            Subscribe
          </motion.button>
        </form>

        <div className="mt-6 text-sm text-[#6B7280]">
          We respect your privacy. Unsubscribe anytime.
        </div>
      </div>
    </motion.section>
  )
}

export default Newsletter
