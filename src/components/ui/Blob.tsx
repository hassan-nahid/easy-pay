"use client"
import { useEffect, useState } from "react"

type Props = {
  wrapperRef: React.RefObject<HTMLDivElement | null>
  containerRef: React.RefObject<HTMLDivElement | null>
  width?: number
  height?: number
}

export default function Blob({ wrapperRef, containerRef, width = 200, height = 200 }: Props) {
  const [pos, setPos] = useState({ left: 0, top: 0, visible: false })

  useEffect(() => {
    function update() {
      const wrapper = wrapperRef?.current
      const container = containerRef?.current
      if (!wrapper || !container) return setPos(p => ({ ...p, visible: false }))

      const children = container.children
      if (children.length < 2) return setPos(p => ({ ...p, visible: false }))

      const child0 = children[0] as HTMLElement
      const child1 = children[1] as HTMLElement
      if (!child0 || !child1) return setPos(p => ({ ...p, visible: false }))

      const wrapperRect = wrapper.getBoundingClientRect()
      const rect0 = child0.getBoundingClientRect()
      const rect1 = child1.getBoundingClientRect()

      // midpoint between centers of first two cards
      const center0 = rect0.left + rect0.width / 2
      const center1 = rect1.left + rect1.width / 2
      const midpoint = (center0 + center1) / 2

      // position relative to wrapper
      const left = midpoint - wrapperRect.left - width / 2
      // vertically center within wrapper or align to middle of cards
      const top = (rect0.top + rect0.height / 2) - wrapperRect.top - height / 2

      setPos({ left, top, visible: true })
    }

    update()
    window.addEventListener("resize", update)
    // update on scroll of the testimonial container's nearest scrollable ancestor
    const scrollParent = containerRef?.current?.parentElement
    scrollParent?.addEventListener("scroll", update)

    return () => {
      window.removeEventListener("resize", update)
      scrollParent?.removeEventListener("scroll", update)
    }
  }, [wrapperRef, containerRef, width, height])

  if (!pos.visible) return null

  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        left: `${pos.left}px`,
        top: `${pos.top}px`,
        width: `${width}px`,
        height: `${height}px`,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 550 600" fill="none" className="w-full h-full">
        <g filter="url(#testimonial-blur)">
          <circle cx="300" cy="300" r="100" fill="#CD9BFF" fillOpacity="0.6" />
        </g>
        <defs>
          <filter id="testimonial-blur" x="0" y="0" width="600" height="600" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
