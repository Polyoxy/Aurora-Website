import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import FooterWrapper from '@/components/FooterWrapper'
import { lotaGrotesque } from '@/fonts'

export const metadata: Metadata = {
  title: 'Aurora | Agency',
  description: 'A full-cycle digital partner empowering businesses and people to lead their digital journeys.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${lotaGrotesque.variable} font-sans bg-black text-white antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <FooterWrapper />
      </body>
    </html>
  )
}
