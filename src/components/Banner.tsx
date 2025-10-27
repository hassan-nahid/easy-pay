"use client"
import Image from "next/image"
import Navbar from "./Navbar"
import StoreBadge from "./StoreBadge"
import { motion } from "framer-motion"
import { fadeUp } from "../lib/animations"

const Banner = () => {
    return (
        <section className="w-full p-3 sm:p-6 flex justify-center">
            <div className="relative w-full max-w-[1440px] rounded-3xl overflow-hidden h-dvh xs:h-dvh sm:h-dvh md:h-dvh xl:h-[700px]">
                <Image
                    src="/assets/banner/banner-bg.png"
                    alt="Banner Background"
                    fill
                    className="object-cover"
                    priority
                />

                <div className="absolute top-6 left-0 right-0 z-20">
                    <Navbar />
                </div>

                <div className="absolute inset-0 z-10 pt-6 sm:pt-12 md:pt-20 px-2 xs:px-4 md:px-10 xl:px-24 flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-0">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        className="w-full md:w-1/2 text-left flex flex-col justify-center"
                    >
                        <div className="text-xs sm:text-sm font-semibold text-[#6b7280]">EASY PAYMENT</div>
                        <h1 className="mt-2 sm:mt-4 text-[28px] xs:text-[36px] sm:text-[44px] md:text-[56px] xl:text-[64px] font-bold text-[#071026] leading-tight">
                            Pay {' '}
                            <span className="relative inline-block">
                                fast and smarter
                                <span className="hidden md:inline absolute top-[70px] left-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="490" height="12" viewBox="0 0 490 12" fill="none">
                                        <path d="M330.072 2.85301C330.256 3.14457 330.105 3.39126 329.585 3.44359C328.283 3.57442 326.967 3.69404 325.645 3.7202C322.771 3.77253 319.89 3.76133 317.246 3.77628C316.542 4.07158 316.621 4.26222 317.272 4.33324C317.923 4.40426 318.594 4.41921 319.259 4.41921C343.944 4.4678 368.637 4.49771 393.322 4.56873C395.98 4.57621 398.637 4.76686 401.281 4.95002C404.386 5.16308 407.471 5.27896 410.582 4.95376C411.885 4.81919 413.246 4.67339 414.548 4.74441C426.303 5.38734 438.083 5.25279 449.857 5.27148C451.166 5.27522 452.475 5.42472 453.777 5.53312C453.876 5.5406 454.001 5.73874 453.994 5.8434C453.988 5.95181 453.883 6.12 453.738 6.1499C452.929 6.32558 452.087 6.62465 451.278 6.59849C448.838 6.51999 446.43 6.38538 444.029 6.84142C443.227 6.99468 442.266 6.88257 441.378 6.87884C434.709 6.87136 428.039 6.85265 421.369 6.85639C411.582 6.86012 401.801 6.8788 392.014 6.88627C388.679 6.89001 385.357 6.94238 382.035 7.20404C379.621 7.39468 377.161 7.41335 374.721 7.42457C357.376 7.50307 340.024 7.5442 322.679 7.62643C317.351 7.6526 312.03 7.68249 306.695 7.98153C301.407 8.28057 296.046 8.20581 290.718 8.22076C265.361 8.27683 240.005 8.28804 214.655 8.35158C203.979 8.37775 193.304 8.52728 182.628 8.54597C171.506 8.56092 160.389 8.46373 149.267 8.45252C133.698 8.43757 118.128 8.44128 102.559 8.47492C99.6781 8.4824 96.797 8.65809 93.9095 8.76275C91.6928 8.84125 89.4762 8.97583 87.2596 9.00573C82.1488 9.07676 77.0313 9.08797 71.914 9.14778C69.4671 9.17768 66.994 9.13657 64.5866 9.33842C58.8443 9.82436 53.0626 9.84679 47.2874 9.95146C44.6235 10.0001 41.9726 10.172 39.3087 10.2916C32.4417 10.6056 25.647 11.2934 18.7537 11.4803C16.9843 11.5289 15.2282 11.7719 13.4588 11.8242C10.1371 11.9251 6.80214 12.0036 3.47387 11.9999C1.55978 11.9999 0.277157 11.1439 0.191648 10.0038C0.106139 8.87492 0.0534921 7.74228 0.000871201 6.61341C-0.0254393 6.04523 0.546852 5.61911 1.3559 5.40604C2.55302 5.09579 3.81589 4.80425 5.10511 4.68838C6.85475 4.53138 8.6505 4.565 10.4265 4.47903C13.5245 4.33324 16.6225 4.16876 19.7205 3.99681C20.8256 3.937 21.9241 3.80991 23.0291 3.76506C31.455 3.4249 39.8547 2.92777 48.2411 2.38576C51.326 2.18764 54.4569 2.225 57.5682 2.17267C63.3433 2.07922 69.1316 2.13531 74.8673 1.58956C76.6104 1.42509 78.4127 1.46993 80.1952 1.43629C87.5227 1.3092 94.8501 1.29426 102.178 0.890559C108.361 0.550401 114.622 0.595242 120.845 0.595242C143.978 0.591504 167.105 0.651332 190.239 0.662546C218.259 0.677498 246.286 0.681202 274.307 0.673726C283.424 0.669988 292.547 0.632646 301.663 0.572838C304.327 0.554148 306.985 0.404612 309.649 0.322376C310.754 0.288734 311.865 0.225172 312.97 0.258814C315.851 0.34105 318.732 0.550392 321.607 0.55413C324.251 0.557868 326.895 0.35226 329.539 0.255072C329.697 0.247596 330.033 0.415831 330.006 0.468163C329.921 0.673753 329.809 0.991494 329.566 1.04009C328.743 1.20456 327.862 1.34286 326.994 1.36155C324.33 1.4251 321.659 1.41385 318.989 1.46992C318.121 1.48861 317.233 1.58208 316.404 1.72787C316.16 1.76898 316.035 2.10539 315.963 2.32219C315.937 2.39695 316.206 2.57263 316.377 2.59506C317.233 2.69972 318.167 2.92026 318.963 2.82307C322.705 2.37451 326.395 2.59135 330.072 2.85301ZM306.899 2.52032C306.735 2.45304 306.57 2.32967 306.406 2.32594C302.65 2.28482 298.894 2.25118 295.132 2.23997C294.29 2.23623 293.441 2.32594 292.52 2.37827C293.073 3.11092 294.086 2.93895 294.875 2.96138C296.684 3.00623 298.375 3.06232 299.539 4.05663C299.789 4.2697 300.848 4.36315 301.354 4.25101C303.203 3.84731 304.979 3.33895 306.761 2.85301C306.873 2.81936 306.853 2.63246 306.899 2.52032ZM270.433 2.4119C269.907 2.4119 269.473 2.39696 269.038 2.41939C268.841 2.4306 268.539 2.47919 268.479 2.55769C268.302 2.79318 268.578 2.92776 269.157 2.98383C269.801 3.04364 270.433 3.15204 271.071 3.21558C271.623 3.27165 271.959 3.1371 271.946 2.85675C271.939 2.75956 271.755 2.62126 271.597 2.58388C271.189 2.49791 270.762 2.45676 270.433 2.4119Z" fill="#2E68FD" />
                                        <path d="M363.078 0.000932675C368.63 0.000932675 374.181 -0.00280167 379.733 0.00467432C381.956 0.00841232 384.193 -0.0102996 386.264 0.542924C386.587 0.628898 386.751 0.912985 386.988 1.10362C386.804 1.17091 386.62 1.29801 386.429 1.30175C382.66 1.36156 378.891 1.4438 375.115 1.45128C365.341 1.46997 355.573 1.46248 345.799 1.44379C344.49 1.44006 343.175 1.31671 341.866 1.22326C341.688 1.21205 341.372 1.04758 341.399 0.991511C341.484 0.770969 341.616 0.412112 341.859 0.374732C342.905 0.206522 343.997 0.0457831 345.076 0.0420452C351.074 0.0121412 357.066 0.0270786 363.065 0.0270786C363.078 0.0158646 363.078 0.00840867 363.078 0.000932675Z" fill="#2E68FD" />
                                        <path d="M475.299 5.70136C475.641 5.83593 476.121 5.92937 476.279 6.11253C476.437 6.29569 476.411 6.6284 476.2 6.78913C475.51 7.32367 474.503 7.47318 473.359 7.20779C473.083 7.14424 472.773 6.78537 472.852 6.62089C473.175 5.97796 474.095 5.66772 475.299 5.70136Z" fill="#2E68FD" />
                                        <path d="M488.448 6.69193C487.954 6.63586 487.323 6.59098 486.731 6.48258C486.251 6.39287 486.119 6.16113 486.369 5.94059C486.461 5.85835 486.725 5.78732 486.896 5.7948C487.52 5.82097 488.152 5.86582 488.763 5.93685C489.757 6.05272 490.342 6.41529 489.783 6.51995C489.395 6.59471 488.981 6.62464 488.448 6.69193Z" fill="#2E68FD" />
                                        <path d="M396.815 0.370953C397.44 0.337311 397.999 0.247579 398.512 0.303649C398.729 0.326077 399.078 0.711093 398.979 0.819495C398.657 1.17087 397.999 1.20826 397.446 1.02136C397.177 0.927911 397.085 0.662517 396.815 0.370953Z" fill="#2E68FD" />
                                        <path d="M465.873 6.78164C465.643 6.58353 465.314 6.40407 465.216 6.18727C465.13 6.00037 465.183 5.72002 465.387 5.57797C465.729 5.33874 466.761 5.45088 466.991 5.76487C467.123 5.93682 467.051 6.23213 466.853 6.38165C466.63 6.5536 466.169 6.63209 465.814 6.74797L465.873 6.78164Z" fill="#2E68FD" />
                                        <path d="M356.284 2.77823C356.586 2.54647 356.968 2.49043 357.336 2.66612C357.455 2.72219 357.527 2.90907 357.448 2.9801C357.185 3.23054 356.784 3.27542 356.415 3.09974C356.297 3.04367 356.323 2.88663 356.284 2.77823Z" fill="#2E68FD" />
                                        <path d="M475.332 1.29797C475.135 1.27928 474.819 1.29426 474.753 1.23071C474.497 0.972792 474.72 0.830735 475.319 0.890543C475.49 0.905495 475.628 1.02138 475.779 1.08867C475.628 1.15595 475.483 1.22695 475.332 1.29797Z" fill="#2E68FD" />
                                        <path d="M443.95 1.16342L443.536 1.0812L443.871 0.954074L443.95 1.16342Z" fill="#2E68FD" />
                                        <path d="M482.502 1.23442L482.265 1.02138L482.745 1.02512L482.502 1.23442Z" fill="#2E68FD" />
                                        <path d="M378.174 2.5764L378.602 2.50161L378.542 2.70348L378.174 2.5764Z" fill="#2E68FD" />
                                    </svg>
                                </span>
                            </span>
                            <br className="hidden sm:block"/>from anywhere
                        </h1>

                        <p className="mt-3 sm:mt-6 text-[14px] xs:text-[16px] sm:text-[18px] text-[#4D525F] max-w-full sm:max-w-[490px]">
                            Experience the future of payments: fast, secure, and tailored for the next generation&apos;s convenience and trust.
                        </p>

                        <div className="flex gap-2 sm:gap-4 mt-4 sm:mt-8">
                            <StoreBadge type="apple" />
                            <StoreBadge type="google" />
                        </div>
                        </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        className="w-full md:w-1/2 flex justify-center md:justify-end relative mb-8 md:mb-0"
                    >
                        <div className="relative w-[190px] xs:w-[250px] sm:w-[350px] md:w-[460px] lg:w-[530px] xl:w-[620px] h-[220px] xs:h-[280px] sm:h-[380px] md:h-[480px] lg:h-[540px] xl:h-[653px]">
                            <Image src="/assets/banner/banner-boy.png" alt="Person" fill className="object-contain" />

                            <div className="absolute top-2 right-2 sm:top-8 sm:right-8 md:top-16 md:right-12 lg:top-32 lg:right-14 xl:top-72 xl:right-12 rounded-xl overflow-hidden bg-white/95 backdrop-blur-md shadow-xl border border-gray-100 px-2 sm:px-4 py-1.5 sm:py-3 min-w-[84px] sm:min-w-[120px] lg:min-w-[164px] flex flex-col items-center">
                                <div className="flex">
                                    <div className="flex -space-x-2 sm:-space-x-3 mb-1 overflow-hidden rounded-full">
                                        <Image src="/assets/banner/avatar-1.png" width={20} height={20} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white" alt="a1" />
                                        <Image src="/assets/banner/avatar-2.png" width={20} height={20} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white" alt="a2" />
                                        <Image src="/assets/banner/avatar-3.png" width={20} height={20} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white" alt="a3" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[10px] sm:text-xs lg:text-sm text-[#071026]">120K+</div>
                                        <div className="text-[9px] sm:text-xs lg:text-xs text-[#6b7280]">Active users</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-2 left-2 sm:bottom-8 sm:left-6 md:bottom-12 md:left-0 rounded-xl overflow-hidden bg-white/95 backdrop-blur-md shadow-xl border border-gray-100 px-2 sm:px-4 lg:px-6 py-1.5 sm:py-3 lg:py-4 min-w-[72px] sm:min-w-[110px] lg:min-w-60">
                                <div className="text-[10px] sm:text-xs lg:text-sm text-[#071026] font-medium">Payment Received</div>
                                <div className="text-xs sm:text-base lg:text-lg text-[#2E68FD] font-bold mt-0.5 sm:mt-1">+35,890.00</div>
                                <div className="flex items-center justify-between mt-1 sm:mt-2 text-[8px] sm:text-[10px] lg:text-[13px] text-[#6b7280]">
                                    <div>1th Jan, 2024</div>
                                    <div className="flex items-center gap-1 sm:gap-2 text-green-600 font-semibold">
                                        <span>3.09%</span>
                                        <Image src="/assets/banner/trend%20up.svg" width={10} height={10} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4" alt="trend" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Banner