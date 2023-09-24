import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Clarifion Upsell',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
