import * as React from "react"

export interface ToastProps {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
  open: boolean
  onOpenChange: (open: boolean) => void
}

export type ToastActionElement = React.ReactElement<{
  altText: string
  onClick: () => void
}>