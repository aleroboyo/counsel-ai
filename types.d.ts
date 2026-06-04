import { ComponentType } from "react"

export interface Steps {
  onContinue: () => void
}

export type Data = {
  step?: number
  label: string
  shortDescription?: string
  longDescription?: string
  icon: ComponentType<{ size?: number }>
}
