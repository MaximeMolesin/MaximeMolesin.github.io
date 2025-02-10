import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maxime Molesin | Engineer, M. Sc.',
  description: 'Portfolio of Maxime Molesin, Engineer, M. Sc.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
