// src/app/layout.jsx
import './globals.css'
import Header from '@/app/components/navigation/Header'
import Footer from '@/app/components/navigation/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-geist-sans' })

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} antialiased`}>
        {/* Navbar hanya muncul di md ke atas */}
        <div className="h-0 md:h-[72px] aria-hidden">
          <Header />
        </div>

        {/* Spacer tetap menyesuaikan */}
        <div className="h-[65px] md:h-[72px]" aria-hidden />

        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
