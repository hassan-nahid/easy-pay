"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeUp, hoverScale } from "../lib/animations"

const CTA = () => {
    return (
        <section className="py-16 md:py-[120px] px-4 sm:px-8 md:px-[135px] bg-white">
            <div className="max-w-[1170px] mx-auto">
                <motion.div
                    className="bg-[#F6F6F6] rounded-2xl p-6 md:p-[100px] relative overflow-hidden"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.16 }}
                >
                    <Image src={"/image 202.png"} alt="CTA Image" fill className="absolute inset-0 object-cover"/>
                    
                    <div className="relative z-10 text-center px-2">
                        <h2 className="text-2xl md:text-[40px] font-bold leading-tight text-white mb-3">
                            Ready to experience seamless <br className="hidden md:block"/> secure payments globally
                        </h2>
                        <p className="text-sm md:text-[16px] text-white mb-6 md:mb-10 max-w-full md:max-w-[580px] mx-auto">
                            Ready for hassle-free, secure payments anywhere in the world? Start using Monks Pay today it&apos;s fast, free, and focused on keeping your transactions secure!
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4 md:px-0">
                            <motion.button
                                className="w-full sm:w-auto bg-[#2E68FD] text-white px-4 md:px-6 py-3 md:py-4 rounded-full text-sm md:text-[16px] font-semibold transition-colors"
                                variants={hoverScale}
                                initial="rest"
                                whileHover="hover"
                                whileTap={{ scale: 0.99 }}
                            >
                                Download the App
                            </motion.button>
                            <motion.button
                                className="w-full sm:w-auto border border-white text-white px-4 md:px-6 py-3 md:py-4 rounded-full text-sm md:text-[16px] font-semibold transition-colors"
                                variants={hoverScale}
                                initial="rest"
                                whileHover="hover"
                                whileTap={{ scale: 0.99 }}
                            >
                                Get Started Now
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CTA
