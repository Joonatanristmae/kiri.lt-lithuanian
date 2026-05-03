"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { useMemo } from "react"

type CarouselImage = {
  src: string
  alt: string
}

type AutoScrollCarouselProps = {
  images: CarouselImage[]
  wrapperClassName?: string
  /** Horizontal gap (px) between slides. Default from breakpoints. */
  slideSpacing?: number
}

function createMomentumAutoScrollPlugin(defaultSpeed: number) {
  return (slider: any) => {
    let animationFrame: number
    let lastTime = 0
    let velocity = defaultSpeed
    let lastInteraction = Date.now()

    const resetAfterMs = 3000
    const friction = 0.98          // smooth slow-down
    const maxVelocity = 0.6        // prevent insane speed spikes

    function animate(time: number) {
      if (!lastTime) lastTime = time
      const delta = time - lastTime
      lastTime = time

      const now = Date.now()

      // Reset after inactivity
      if (now - lastInteraction > resetAfterMs) {
        velocity = defaultSpeed
      } else {
        // Apply friction decay
        velocity *= friction
      }

      slider.track.add((velocity * delta) / 16)

      animationFrame = requestAnimationFrame(animate)
    }

    slider.on("created", () => {
      animationFrame = requestAnimationFrame(animate)
    })

    slider.on("dragStarted", () => {
      lastInteraction = Date.now()
    })

    slider.on("dragEnded", () => {
      let dragVelocity = slider.track.velocity()

      // Clamp velocity to prevent spike
      dragVelocity = Math.max(
        -maxVelocity,
        Math.min(maxVelocity, dragVelocity)
      )

      // Replace velocity instead of stacking
      velocity = dragVelocity * 20

      lastInteraction = Date.now()
    })

    slider.on("destroyed", () => {
      cancelAnimationFrame(animationFrame)
    })
  }
}

export default function AutoScrollCarousel({
  images,
  wrapperClassName = "w-full py-10",
  slideSpacing,
}: AutoScrollCarouselProps) {
  const loopedImages = useMemo(
    () => [...images, ...images],
    [images],
  )

  const autoScrollPlugin = useMemo(
    () => createMomentumAutoScrollPlugin(0.002), // 🔥 smaller = slower
    [],
  )

  const spacing = slideSpacing ?? 100
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: "performance",
      drag: true,
      mode: "free",
      slides: {
        perView: 3,
        spacing,
      },
      breakpoints: {
        "(max-width: 640px)": {
          slides: {
            perView: 2,
            spacing: slideSpacing ?? 16,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: slideSpacing != null ? 4 : 5,
            spacing: slideSpacing ?? 32,
          },
        },
      },
    },
    [autoScrollPlugin],
  )

  if (!images.length) return null

  return (
    <div className={wrapperClassName}>
      <div
        ref={sliderRef}
        className="keen-slider mx-auto max-w-6xl select-none"
      >
        {loopedImages.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="keen-slider__slide flex items-center justify-center"
          >
            <div className="flex h-20 w-full items-center justify-center sm:h-24 lg:h-28">
              <Image
                src={image.src}
                alt={image.alt}
                width={240}
                height={120}
                className="h-full w-auto object-contain pointer-events-none"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}