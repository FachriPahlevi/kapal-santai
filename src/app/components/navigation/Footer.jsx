import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="lg:px-36 md:px-20 sm:px-10 w-full px-4 pt-20 mt-20 max-sm:pt-5 border-slate-200 border-t">
      <div className="flex flex-wrap max-md:flex-col gap-10 text-nowrap">
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

        <div className="flex flex-1 flex-col gap-3">
          <p className="font-medium text-black">Perusahaan</p>
          <Link href="/about-us">Tentang Kami</Link>
          <Link href="/about-us">Layanan</Link>
          <Link href="https://guidesantai.com">
            Trip Eropa dengan Guidesantai
          </Link>
        </div>

        <div className="flex flex-1 flex-col gap-3">
          <p className="font-medium text-black">Dukungan</p>
          <Link href="/support">Pusat Bantuan</Link>
          <Link href="/privacy-policy">Kebijakan Privasi</Link>
          <Link href="/terms-and-conditions">Syarat &amp; Ketentuan</Link>
        </div>

        <div className="flex flex-1 flex-col gap-5 text-main">
          <p className="font-medium text-black">Sosial Media</p>
          <a
            href="https://www.facebook.com/profile.php?id=61576389076536#"
            target="_blank"
            rel="noopener noreferrer"
            className="bounce-animation flex items-center gap-3 -mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#0077B6"
                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
              />
            </svg>
            <p className="text-default">Kapalsantai</p>
          </a>
          <a
            href="https://www.instagram.com/kapalsantai"
            target="_blank"
            rel="noopener noreferrer"
            className="bounce-animation flex items-center gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#0077B6"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              />
            </svg>
            <p className="text-default">Kapalsantai</p>
          </a>
        </div>
      </div>

      <div className="mx-auto border-t sm:pb-10 my-5 sm:mt-10 py-5 border-slate-200 sm:pt-10 flex justify-between gap-4 items-center flex-wrap-reverse">
        <p className="text-base max-sm:text-center">
          © {new Date().getFullYear()} PT Santai Digital Services.
        </p>
      </div>
    </footer>
  )
}
