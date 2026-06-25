"use client"

import { useRef } from "react"
import { useInView, type UseInViewOptions } from "framer-motion"

export function useSectionInView(options?: Pick<UseInViewOptions, "margin">) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px", ...options })
  return { ref, isInView }
}
