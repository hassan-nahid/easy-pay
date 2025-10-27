"use client"
import { InfiniteSliderHoverSpeed } from "./ui/InfinitySlide"
import { motion } from "framer-motion"
import { fadeUp, stagger, hoverScale } from "../lib/animations"

const Features = () => {
    const features = [
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.1251 17.5V12.5C38.1251 10.7775 36.5201 9.375 34.5501 9.375H15.4476C13.4776 9.375 11.8726 10.7775 11.8726 12.5V47.5C11.8726 49.2225 13.4776 50.625 15.4476 50.625H34.5501C36.5201 50.625 38.1251 49.2225 38.1251 47.5V37.5C38.1251 36.465 38.9651 35.625 40.0001 35.625C41.0351 35.625 41.8751 36.465 41.8751 37.5V47.5C41.8751 51.2925 38.5901 54.375 34.5501 54.375H15.4476C11.4101 54.375 8.12256 51.2925 8.12256 47.5V12.5C8.12256 8.7075 11.4076 5.625 15.4476 5.625H34.5501C38.5876 5.625 41.8751 8.7075 41.8751 12.5V17.5C41.8751 18.535 41.0351 19.375 40.0001 19.375C38.9651 19.375 38.1251 18.535 38.1251 17.5Z" fill="#01081B" />
                    <path d="M45 15.625H27.5C23.7075 15.625 20.625 18.7075 20.625 22.5V32.5C20.625 36.2925 23.7075 39.375 27.5 39.375H45C48.7925 39.375 51.875 36.2925 51.875 32.5V22.5C51.875 18.7075 48.7925 15.625 45 15.625ZM27.5 19.375H45C46.7225 19.375 48.125 20.7775 48.125 22.5V23.125H24.375V22.5C24.375 20.7775 25.7775 19.375 27.5 19.375ZM45 35.625H27.5C25.7775 35.625 24.375 34.2225 24.375 32.5V26.875H48.125V32.5C48.125 34.2225 46.7225 35.625 45 35.625Z" fill="#2E68FD" />
                </svg>
            ),
            title: "Instant payments",
            description: "Send money to friends or family in real-time, for free.",
            bgColor: "bg-[#F3F7FF]"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="47">
                    <image id="img_0" x="0" y="0" width="39" height="47" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iNDciIHZpZXdCb3g9IjAgMCAzOSA0NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM4Ljc1IDYuODc1VjI0LjM3NUMzOC43NSAyNS40MSAzNy45MSAyNi4yNSAzNi44NzUgMjYuMjVDMzUuODQgMjYuMjUgMzUgMjUuNDEgMzUgMjQuMzc1VjYuODc1QzM1IDUuMTUyNSAzMy41OTc1IDMuNzUgMzEuODc1IDMuNzVINi44NzVDNS4xNTI1IDMuNzUgMy43NSA1LjE1MjUgMy43NSA2Ljg3NVYzOS4zNzVDMy43NSA0MS4wOTc1IDUuMTUyNSA0Mi41IDYuODc1IDQyLjVIMjEuODc1QzIyLjkxIDQyLjUgMjMuNzUgNDMuMzQgMjMuNzUgNDQuMzc1QzIzLjc1IDQ1LjQxIDIyLjkxIDQ2LjI1IDIxLjg3NSA0Ni4yNUg2Ljg3NUMzLjA4MjUgNDYuMjUgMCA0My4xNjc1IDAgMzkuMzc1VjYuODc1QzAgMy4wODI1IDMuMDgyNSAwIDYuODc1IDBIMzEuODc1QzM1LjY2NzUgMCAzOC43NSAzLjA4MjUgMzguNzUgNi44NzVaTTI5LjM3NSA3LjVIOS4zNzVDOC4zNCA3LjUgNy41IDguMzQgNy41IDkuMzc1QzcuNSAxMC40MSA4LjM0IDExLjI1IDkuMzc1IDExLjI1SDI5LjM3NUMzMC40MSAxMS4yNSAzMS4yNSAxMC40MSAzMS4yNSA5LjM3NUMzMS4yNSA4LjM0IDMwLjQxIDcuNSAyOS4zNzUgNy41Wk0yMS4yNSAxNi44NzVDMjEuMjUgMTUuODQgMjAuNDEgMTUgMTkuMzc1IDE1SDkuMzc1QzguMzQgMTUgNy41IDE1Ljg0IDcuNSAxNi44NzVDNy41IDE3LjkxIDguMzQgMTguNzUgOS4zNzUgMTguNzVIMTkuMzc1QzIwLjQxIDE4Ljc1IDIxLjI1IDE3LjkxIDIxLjI1IDE2Ljg3NVpNOS4zNzUgMjIuNUM4LjM0IDIyLjUgNy41IDIzLjM0IDcuNSAyNC4zNzVDNy41IDI1LjQxIDguMzQgMjYuMjUgOS4zNzUgMjYuMjVIMTEuODc1QzEyLjkxIDI2LjI1IDEzLjc1IDI1LjQxIDEzLjc1IDI0LjM3NUMxMy43NSAyMy4zNCAxMi45MSAyMi41IDExLjg3NSAyMi41SDkuMzc1WiIgZmlsbD0iIzAxMDgxQiIvPgo8L3N2Zz4K" opacity="1" />
                    <image id="img_1" x="15" y="18" width="29" height="29" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyOSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzFfMjM1KSI+CjxwYXRoIGQ9Ik0xMC45NTg5IDE4Ljk1ODlMMTQuOTE3NyAxNU0xOC44NzY2IDExLjA0MTFMMTQuOTE3NyAxNU0xNC45MTc3IDE1TDEwLjk1ODkgMTEuMDQxMU0xNC45MTc3IDE1TDE4Ljg3NjYgMTguOTU4OSIgc3Ryb2tlPSIjMkU2OEZEIiBzdHJva2Utd2lkdGg9IjMuNDc1MDQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTQuNDk5OCAyNi41ODMzQzIxLjE3MzMgMjYuNTgzMyAyNi41ODMyIDIxLjE3MzQgMjYuNTgzMiAxNC41QzI2LjU4MzIgNy44MjY1MiAyMS4xNzMzIDIuNDE2NjMgMTQuNDk5OCAyLjQxNjYzQzcuODI2NCAyLjQxNjYzIDIuNDE2NSA3LjgyNjUyIDIuNDE2NSAxNC41QzIuNDE2NSAyMS4xNzM0IDcuODI2NCAyNi41ODMzIDE0LjQ5OTggMjYuNTgzM1oiIHN0cm9rZT0iIzJFNjhGRCIgc3Ryb2tlLXdpZHRoPSIzLjg2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xXzIzNSI+CjxyZWN0IHdpZHRoPSIyOSIgaGVpZ2h0PSIyOSIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K" opacity="1" />
                </svg>

            ),
            title: "No hidden fees",
            description: "Clear and simple pricing. Always be aware of your costs.",
            bgColor: "bg-[#FBF6EF]"
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.5 49.375H15C9.83 49.375 5.625 45.17 5.625 40V20C5.625 14.83 9.83 10.625 15 10.625H47.5C51.2925 10.625 54.375 13.7075 54.375 17.5V42.5C54.375 46.2925 51.2925 49.375 47.5 49.375ZM15 14.375C11.8975 14.375 9.375 16.8975 9.375 20V40C9.375 43.1025 11.8975 45.625 15 45.625H47.5C49.2225 45.625 50.625 44.2225 50.625 42.5V17.5C50.625 15.7775 49.2225 14.375 47.5 14.375H15Z" fill="#01081B" />
                    <path d="M52.5002 20.625H42.7002C40.2352 20.625 37.8202 21.6275 36.0752 23.375C34.3027 25.1475 33.3252 27.5 33.3252 30C33.3252 35.17 37.5302 39.375 42.7002 39.375H52.5002C53.5352 39.375 54.3752 38.535 54.3752 37.5V22.5C54.3752 21.465 53.5352 20.625 52.5002 20.625ZM50.6252 35.625H42.7002C39.5977 35.625 37.0752 33.1025 37.0752 30C37.0752 28.5 37.6602 27.09 38.7252 26.025C39.7727 24.9775 41.2227 24.375 42.7002 24.375H50.6252V35.625ZM43.8252 28.675C44.1752 29.025 44.3752 29.5 44.3752 30C44.3752 30.25 44.3252 30.475 44.2252 30.725C44.1502 30.95 44.0002 31.15 43.8252 31.325C43.4752 31.675 43.0002 31.875 42.5002 31.875C42.0002 31.875 41.5252 31.675 41.1752 31.325C40.8252 30.975 40.6252 30.5 40.6252 30C40.6252 29.5 40.8252 29.025 41.1752 28.675C41.8752 27.975 43.1252 27.975 43.8252 28.675Z" fill="#2E68FD" />
                </svg>

            ),
            title: "Digital wallet",
            description: "Store money securely and make fast transfers or purchases.",
            bgColor: "bg-[#EEF9FE]"
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45 8.125H12.5C8.7075 8.125 5.625 11.2075 5.625 15V35C5.625 38.7925 8.7075 41.875 12.5 41.875H31.075C32.11 41.875 32.95 41.035 32.95 40C32.95 38.965 32.11 38.125 31.075 38.125H12.5C10.7775 38.125 9.375 36.7225 9.375 35V21.875H48.125V29.575C48.125 30.61 48.965 31.45 50 31.45C51.035 31.45 51.875 30.61 51.875 29.575V15C51.875 11.2075 48.7925 8.125 45 8.125ZM9.375 18.125V15C9.375 13.2775 10.7775 11.875 12.5 11.875H45C46.7225 11.875 48.125 13.2775 48.125 15V18.125H9.375ZM25 30.625C26.035 30.625 26.875 31.465 26.875 32.5C26.875 33.535 26.035 34.375 25 34.375H22.5C21.465 34.375 20.625 33.535 20.625 32.5C20.625 31.465 21.465 30.625 22.5 30.625H25ZM17.5 30.625C18.535 30.625 19.375 31.465 19.375 32.5C19.375 33.535 18.535 34.375 17.5 34.375H15C13.965 34.375 13.125 33.535 13.125 32.5C13.125 31.465 13.965 30.625 15 30.625H17.5Z" fill="#01081B" />
                    <path d="M51.865 28.46L43.43 23.7025C42.06 22.93 40.4325 22.9325 39.0725 23.7025L30.635 28.46C29.0875 29.335 28.125 31.045 28.125 32.93V33.75C28.125 42.285 33.3125 49.71 40.74 51.805C40.9075 51.8525 41.08 51.875 41.25 51.875C41.42 51.875 41.5925 51.85 41.76 51.805C49.1875 49.71 54.375 42.285 54.375 33.75V32.93C54.375 31.045 53.4125 29.335 51.865 28.46ZM50.625 33.75C50.625 40.4125 46.7975 46.2025 41.25 48.04C35.7025 46.205 31.875 40.4125 31.875 33.75V32.93C31.875 32.4125 32.1175 31.93 32.475 31.7275L40.915 26.97C41.025 26.9075 41.1375 26.8775 41.25 26.8775C41.3625 26.8775 41.4775 26.9075 41.5875 26.97L50.025 31.7275C50.385 31.93 50.625 32.4125 50.625 32.93V33.75ZM46.325 33.675C47.0575 34.4075 47.0575 35.595 46.325 36.3275L41.325 41.3275C40.96 41.6925 40.48 41.8775 40 41.8775C39.52 41.8775 39.04 41.695 38.675 41.3275L36.175 38.8275C35.4425 38.095 35.4425 36.9075 36.175 36.175C36.9075 35.4425 38.095 35.4425 38.8275 36.175L40.0025 37.35L43.6775 33.675C44.41 32.9425 45.5975 32.9425 46.33 33.675H46.325Z" fill="#2E68FD" />
                </svg>

            ),
            title: "Secure transactions",
            description: "End-to-end encryption for all transactions.",
            bgColor: "bg-[#F4EDFC]"
        }
    ]

    return (
        <section className="py-16 px-6 sm:px-8 lg:px-24 bg-white">
            <div className="max-w-[1170px] mx-auto">
                <div className="text-center mb-16">
                    <div className="mb-4">
                        <span className="text-[16px] font-semibold text-[#932EFA]">FEATURES</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight text-[#01081B] max-w-[600px] mx-auto">
                        Why choose Easy Pay for effortless payments?
                    </h2>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.14 }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`${feature.bgColor} rounded-2xl py-8 px-4 text-center`}
                            variants={fadeUp}
                            whileHover={hoverScale.hover}
                        >
                            <div className="flex justify-center mb-6">
                                <motion.div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20" whileHover={{ scale: 1.03 }}>
                                    {feature.icon}
                                </motion.div>
                            </div>
                            <h3 className="text-lg md:text-[20px] font-bold text-[#01081B] mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm md:text-[16px] text-[#4D525F] leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="flex justify-center items-center gap-8 sm:gap-24">
                    <InfiniteSliderHoverSpeed />
                </div>
            </div>
        </section>
    )
}

export default Features
