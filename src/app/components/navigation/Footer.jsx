import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="lg:px-36 md:px-20 sm:px-10 w-full px-4 pt-20 mt-20 max-sm:pt-5 border-t">
      <div className="flex flex-wrap max-md:flex-col gap-10 text-nowrap">
        {/* Kolom 1 */}
        <div className="flex flex-1 flex-col gap-5 mr-20 max-w-96 text-wrap">
          <Link href="/">
            <Image
              src="/assets/logo/logo.svg"
              alt="logo"
              width={190}
              height={190}
              className="transition-all md:w-[168px] w-[128px]"
            />
          </Link>

          {/* Alamat */}
          <div className="flex gap-3 items-start">
            <Image
              src="/assets/icons/address.svg"
              alt=""
              width={30}
              height={30}
              className="mt-2"
            />
            <div className="flex flex-col gap-3">
              <div>
                <p>Kantor pusat</p>
                <p className="text-black font-medium">
                  Jl. Wonocatur, Gg. Merpati No. 65, Banguntapan, Bantul, DI
                  Yogyakarta, Indonesia 55198
                </p>
              </div>
              <div>
                <p>Kantor cabang</p>
                <p className="text-black font-medium whitespace-pre-line">
                  C/o Guidesantai GmbH
                  {'\n'}Aeschengraben 29, 4051 Basel, Switzerland
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-3">
            <Image
              src="/assets/icons/email.svg"
              alt=""
              width={30}
              height={30}
            />
            <div>
              <p>Email</p>
              <p className="text-black font-medium">info@kapalsantai.com</p>
            </div>
          </div>

          {/* Kontak */}
          <div className="flex gap-3">
            <Image
              src="/assets/icons/contact.svg"
              alt=""
              width={28}
              height={28}
            />
            <div>
              <p>Pusat panggilan</p>
              <p className="text-black font-medium">+62 853 3813 7706</p>
            </div>
          </div>
        </div>

        {/* Kolom 2 */}
        <div className="flex flex-1 flex-col gap-3">
          <p className="font-medium text-black">Perusahaan</p>
          <Link href="/about-us">Tentang Kami</Link>
          <Link href="/about-us">Layanan</Link>
          <Link href="https://guidesantai.com">
            Trip Eropa dengan Guidesantai
          </Link>
        </div>

        {/* Kolom 3 */}
        <div className="flex flex-1 flex-col gap-3">
          <p className="font-medium text-black">Dukungan</p>
          <Link href="/support">Pusat Bantuan</Link>
          <Link href="/privacy-policy">Kebijakan Privasi</Link>
          <Link href="/terms-and-conditions">Syarat &amp; Ketentuan</Link>
        </div>

        {/* Kolom 4 */}
        <div className="flex flex-1 flex-col gap-5 text-main">
          <p className="font-medium text-black">Sosial Media</p>
          <a
            href="https://www.facebook.com/profile.php?id=61576389076536#"
            target="_blank"
            rel="noopener noreferrer"
            className="bounce-animation flex items-center gap-3 -mt-2"
          >
            {/* SVG Facebook */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 512 512"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>
            <p className="text-default">Kapalsantai</p>
          </a>
          <a
            href="https://www.instagram.com/kapalsantai"
            target="_blank"
            rel="noopener noreferrer"
            className="bounce-animation flex items-center gap-3"
          >
            {/* SVG Instagram */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 448 512"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
            <p className="text-default">Kapalsantai</p>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto border-t sm:pb-10 my-5 sm:mt-10 py-5 sm:pt-10 flex justify-between gap-4 items-center flex-wrap-reverse">
        <p className="text-base max-sm:text-center">
          © {new Date().getFullYear()} PT Santai Digital Services.
        </p>
      </div>
    </footer>
  )
}
