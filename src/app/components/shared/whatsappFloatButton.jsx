import Image from 'next/image'
import Link from 'next/link'

export default function WhatsAppFloatButton() {
  return (
    <Link
      href="https://wa.me/+6285338137706?text=Halo KapalSantai! Aku mau tanya tentang info paket tripnya."
      target="_blank"
      className="group fixed right-6 sm:right-14 bottom-12 flex items-center z-10"
    >
      <div className="transition-transform duration-300 z-10 translate-x-32 group-hover:translate-x-0">
        <Image
          alt="WhatsApp Icon"
          loading="lazy"
          width={200}
          height={201}
          src="/assets/icons/whatsapp.png"
          className="w-10 sm:w-14 aspect-square"
        />
      </div>
      <div className="flex items-center justify-center scale-x-0 group-hover:scale-x-100 w-[160px] origin-right -ml-3 bg-[#3CC054] px-3 py-[1px] rounded-full transition-transform duration-300">
        <p className="relative top-[1px] text-sm !text-white font-semibold whitespace-nowrap text-center">
          WhatsApp kami
        </p>
      </div>
    </Link>
  )
}
