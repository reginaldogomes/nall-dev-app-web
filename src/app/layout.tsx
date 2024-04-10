import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Desenvolvedor Front-end Web',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt'>
      <body className='min-h-screen min-w-screen grid grid-cols-[1fr] grid-rows-[auto_1fr_auto] py-2 px-2 gap-2 bg-primary text-base text-text font-primary antialiased'>
        <Header />
        <main className='w-full md:max-w-5xl mx-auto bg-primary p-2 rounded'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
