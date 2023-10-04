'use client'
import { cn } from '@/lib/utils'
import { ScrollShadow } from '@nextui-org/react'
import type { ScrollShadowProps } from '@nextui-org/scroll-shadow'

interface Props extends ScrollShadowProps {
  children: React.ReactNode
}
export default function OverflowScroll({ children, ...props }: Props) {
  const { className } = props
  return <ScrollShadow className={cn(className)} hideScrollBar>{children}</ScrollShadow>
}
