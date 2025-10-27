export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export const hoverScale = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.18 } },
}

export const fadeDown = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}
