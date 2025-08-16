// src/app/layout.jsx
import './globals.css'
import Header from '@/app/components/navigation/Header'
import Footer from '@/app/components/navigation/Footer'
import { Inter } from 'next/font/google'
import WhatsAppFloatButton from './components/shared/whatsappFloatButton'

const inter = Inter({ subsets: ['latin'], variable: '--font-geist-sans' })

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} antialiased`}>
        {/* Navbar hanya muncul di md ke atas */}
        <div className="hidden md:block">
          <Header />
        </div>

        {/* Spacer hanya ada kalau md ke atas */}
        <div className="h-0 md:h-[72px]" aria-hidden />

        <main className="page">{children}</main>
        <WhatsAppFloatButton />
        <Footer />
      </body>
    </html>
  )
}
