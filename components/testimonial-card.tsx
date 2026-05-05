import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  image: string
}

export function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 text-center shadow-sm">
      <div className="relative h-16 w-16 overflow-hidden rounded-full">
        <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
      </div>
      <p className="text-gray-500">"{quote}"</p>
      <div>
        <h4 className="font-bold">{author}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  )
}
