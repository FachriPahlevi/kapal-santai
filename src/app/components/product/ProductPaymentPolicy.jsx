export const dynamic = 'force-static'

export default function KapalsantaiPolicies() {
  return (
    <section id="policy" className="space-y-12 text-slate-900">
      <div className="grid grid-cols-1 sm:grid-cols-[205px_minmax(0,1fr)] gap-4 sm:gap-6">
        <h3 className="text-2xl font-bold">Kebijakan Pembayaran</h3>
        <div className="space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed">
          <div className="space-y-2">
            <p className="font-semibold">Pemesanan</p>
            <p>
              Semua pemesanan harus melalui akun terdaftar dan akan disambungkan
              dengan Customer Service Kapalsantai di WhatsApp.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Pembayaran Penuh di Muka</p>
            <p>Slot dikunci setelah pelunasan 100 % harga paket di muka.</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Masa Berlaku Link Pembayaran</p>
            <p>
              Link pembayaran berlaku 24 jam; jika kedaluwarsa, slot otomatis
              kembali ke inventori tanpa penalti.
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-semibold">Pembayaran</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <p>
                  Kapalsantai menyediakan banyak platform pembayaran di
                  antaranya:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Kartu Kredit & Kartu Debit</li>
                  <li>ATM</li>
                  <li>Transfer Online</li>
                  <li>Virtual Account</li>
                  <li>E-wallet</li>
                  <li>Paylater / Cicilan Tanpa Kartu Kredit</li>
                </ul>
              </li>
              <li>
                Kapalsantai menyediakan opsi pembayaran dalam berbagai mata uang
                selain Rupiah (IDR), termasuk Euro (EUR), Dolar AS (USD), Yuan
                Tiongkok (CNY), Dolar Australia (AUD), Pound Sterling (GBP), dan
                Franc Swiss (CHF).
              </li>
              <li>
                Kapalsantai tidak membebankan biaya administrasi; jika terdapat
                biaya tambahan dari pihak ketiga, sepenuhnya akan menjadi
                tanggungan tamu.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[205px_minmax(0,1fr)] gap-4 sm:gap-6">
        <h3 className="text-2xl font-bold">Kebijakan Kapal</h3>
        <div className="space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed">
          <div className="space-y-2">
            <p className="font-semibold">Reschedule</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Reschedule hanya boleh dilakukan 1 kali. Ajukan permintaan
                reschedule via WhatsApp paling lambat 30 hari sebelum tanggal
                trip.
              </li>
              <li>
                Tanggal pengganti harus berada di tahun kalender yang sama. Jika
                terdapat perbedaan harga pada tanggal pengganti, selisih biaya
                dibayarkan oleh tamu.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">No-Show & Keterlambatan</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Wajib tiba di Labuan Bajo H-1.</li>
              <li>
                Open Trip berangkat tepat waktu; tamu terlambat bisa menyusul
                dengan biaya sendiri.
              </li>
              <li>
                Private Trip: jika ada keterlambatan, kapten akan menentukan
                apakah perjalanan masih bisa dilanjutkan setelah menilai kondisi
                arus laut dan cuaca terkini.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Kapasitas & Usia</p>
            <p>
              Jumlah tamu tidak boleh melebihi manifest operator (cek katalog
              kapal). Kategori harga:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Infant &lt;2 tahun gratis</li>
              <li>Toddler 2–5 tahun 50 % (bila operator mendukung)</li>
              <li>Anak ≥ 5 tahun tarif penuh</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Kesehatan</p>
            <p>
              Tamu dengan kondisi jantung serius, epilepsi, hamil ≥ 32 minggu
              dan lain-lain wajib berkonsultasi dengan dokter. Mitra Kapal
              berhak menolak boarding jika kondisi tamu dinilai tidak
              memungkinkan untuk melaksanakan pelayaran.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Perilaku</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Merokok dan mengonsumsi alkohol di atas kapal wajib mematuhi
                aturan kapal.
              </li>
              <li>
                Tamu dilarang membuang sampah plastik ke laut/pulau; tempat
                pembuangan sampah disediakan.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Kebijakan Makanan & Minuman</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Setiap kapal menyediakan menu dasar halal (nasi, lauk, sayur,
                buah). Untuk menu tambahan (Western, vegetarian/vegan), alergi,
                atau preferensi khusus, ajukan permintaan melalui WhatsApp
                Kapalsantai paling lambat 7 hari sebelum keberangkatan.
              </li>
              <li>
                Minuman beralkohol tersedia sebagai add-on; pembelian dan
                pembayaran dilakukan di kapal atau pre-order lewat WhatsApp.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Briefing Keselamatan</p>
            <p>
              Mitra Kapal wajib memberi demo life-jacket & prosedur evakuasi
              sebelum kapal berlayar.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Ringkasan Liabilitas</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Aktivitas di dalam kapal menjadi tanggung jawab Mitra Kapal.
              </li>
              <li>
                Aktivitas di destinasi/di darat menjadi tanggung jawab Pemandu.
                Tarif, rute, tiket dinegosiasikan langsung dengan Pemandu; tamu
                membayar secara tunai.
              </li>
              <li>
                Tamu bertanggung jawab atas keselamatan pribadi (alas kaki, air
                minum, dll.).
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Penggantian Kapal</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <span className="font-semibold">Force Majeure</span>
                <p>
                  Kejadian di luar kendali (cuaca buruk ekstrem, larangan
                  pelayaran) → refund penuh otomatis.
                </p>
              </li>
              <li>
                <span className="font-semibold">Double Booking</span>
                <p>
                  Kesalahan update jadwal oleh admin kapal → admin kapal
                  mencarikan kapal pengganti sesuai tipe trip (Private/Open).
                  Kapalsantai akan mengonfirmasi dalam 2×24 jam; jika tidak ada
                  jawaban, auto refund.
                </p>
              </li>
              <li>
                <span className="font-semibold">Overbooking</span>
                <p>
                  Slot penuh di kapal yang dipesan → dipindahkan ke kapal lain.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Akan dicarikan kapal dengan spesifikasi setara.</li>
                  <li>
                    Jika upgrade ke kapal dengan tarif lebih tinggi, selisih
                    biaya dibebankan ke tamu.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Force Majeure</p>
            <p>
              Pelayaran dapat dibatalkan/diubah rute sewaktu-waktu oleh
              kapten/syahbandar.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[205px_minmax(0,1fr)] gap-4 sm:gap-6">
        <h3 className="text-2xl font-bold">Kebijakan Refund & Reschedule</h3>
        <div className="space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed">
          <div className="space-y-2">
            <p className="font-semibold">Pembatalan Kolektif</p>
            <p>
              Sistem tidak mendukung refund sebagian; pengembalian dana hanya
              berlaku jika seluruh booking dibatalkan.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">
              Satu Transaksi, Satu Penanggung Jawab
            </p>
            <p>
              Setiap reservasi dicatat sebagai satu transaksi atas nama satu
              tamu utama/representatif.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Substitusi Tamu</p>
            <p>
              Tamu yang batal dapat diganti tanpa proses refund; cukup berikan
              data pengganti kepada Customer Service saat mengajukan perubahan
              maksimal 14 hari sebelum tanggal trip.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
