import type { ReactNode } from "react"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center shadow-sm">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  )
}
