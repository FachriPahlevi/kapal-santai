import './globals.css'
import Header from '@/app/components/navigation/Header'
import Footer from '@/app/components/navigation/Footer'
import { Inter } from 'next/font/google'
import WhatsAppFloatButton from './components/shared/whatsappFloatButton'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
export const metadata = {
  title: {
    default: 'Kapalsantai',
    template: 'Kapalsantai',
  },
  description: 'Kapalsantai',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} antialiased bg-white text-gray-900 font-sans leading-7`}
      >
        <div className="hidden md:block">
          <Header />
        </div>
        <div className="hidden md:block h-[72px]" aria-hidden />
        <main className="pt-0 md:pt-6 pb-6">{children}</main>
        <WhatsAppFloatButton />
        <Footer />
      </body>
    </html>
  )
}
