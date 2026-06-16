import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Engineer Portfolio - Salman Raza',
  description: 'AI Engineer & AI Architect Portfolio built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}