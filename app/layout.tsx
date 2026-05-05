import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Savvy Kid - Smart Kid Wallet",
  description: "Learn financial literacy through fun games",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>{/* Add any additional head elements here */}</head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
