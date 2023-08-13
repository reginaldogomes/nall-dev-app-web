import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex-col bg-secondary-500">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
