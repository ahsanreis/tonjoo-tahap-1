import Image from "next/image";
export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800">
      <div className="bg-white justify-center text-center p-6 text-zinc-900 dark:text-zinc-100 dark:bg-white">
        <Image src="/assets/img/payment-gateway.jpg" alt="Payment Gateway" width={600} height={70} className="mx-auto my-auto" />
      </div>
      <div className="bg-theme-primary p-10 flex leading-loose justify-center text-zinc-900 dark:text-zinc-100">
        <div className="space-x-8">
          <div className="font-bold text-lg">Mino Store</div>
          <div>Yogyakarta</div>
          <div>Kebumen</div>
          <div>Purwokerto</div>
          <div>Kudus</div>
          <div>Surakarta</div>
        </div>
        <div className="space-x-8 ml-30">
          <div className="font-bold text-lg">Belanja</div>
          <div>Sepatu Pria</div>
          <div>Sepatu Wanita</div>
          <div>Sepatu Uniseks</div>
          <div>Pernak Pernik</div>
          <div>Aksesoris</div>
        </div>
        <div className="space-x-8 ml-30">
          <div className="font-bold text-lg">Layanan</div>
          <div>Bantuan</div>
          <div>Cara Pengambilan</div>
          <div>Indeks Produk</div>
          <div>Promo & Diskon</div>
          <div>Konfirmasi Transfer</div>
          <div>Status Pesanan</div>
        </div>
        <div className="space-x-8 ml-30">
          <div className="font-bold text-lg">Tentang Kami</div>
          <div>Tentang Kami</div>
          <div>Pers / Media</div>
          <div>Karir</div>
          <div>Persyaratan</div>
          <div>Kebijakan Privasi</div>
          <div>Hubungi Kami</div>
        </div>
      </div>
      <div className="bg-theme-secondary dark:bg-theme-secondary mx-auto text-center text-sm text-secondary dark:text-secondary">&copy; {new Date().getFullYear()} 2020 CV.MinoStore Minomartani.</div>
    </footer>
  );
}
