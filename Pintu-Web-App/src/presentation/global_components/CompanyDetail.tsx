import React from 'react'
import { grayColorNavMenu, textColorDetail } from '../../core/themeColor'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import TelegramIcon from '@mui/icons-material/Telegram'
import YouTubeIcon from '@mui/icons-material/YouTube'

const CompanyDetail: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#EDEDED' }}>
      <div className="mx-auto md:w-11/12 md:self-center mt-7 pt-0 px-5 pb-36 flex flex-col lg:w-4/5 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-2">
          <div className="flex flex-col gap-7">
            <img
              src={require('../../assets/logo_splash_screen_black.png')}
              className="w-24 h-6"
              alt="logo-pintu"
            />
            <div className="flex flex-row gap-2">
              <InstagramIcon style={{ width: '30px', height: '30px' }} />
              <FacebookIcon style={{ width: '30px', height: '30px' }} />
              <TwitterIcon style={{ width: '30px', height: '30px' }} />
              <TelegramIcon style={{ width: '30px', height: '30px' }} />
              <YouTubeIcon style={{ width: '30px', height: '30px' }} />
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <p className="text-base font-bold">Alamat Perusahaan</p>
            <div className="hidden md:flex md:flex-col md:mt-5 md:gap-4">
              <h4 className="text-sm font-bold">Kantor Pusat</h4>
              <p className="text-sm text-gray-500">
                The City Tower Lantai 27 Jalan M.H Thamrin No.81, Jakarta Pusat,
                DKI Jakarta 10310 Indonesia
              </p>
              <h4 className="text-sm font-bold">
                Operasional & Customer Support
              </h4>
              <p className="text-sm text-gray-500">
                Rukan Permata Senayan Blok H1-H2 Jalan Tentara Pelajar, Jakarta
                Selatan DKI Jakarta 12210 Indonesia
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <h4 className="text-base font-bold">Pintu</h4>
            <div className="hidden md:flex md:flex-col md:mt-5 md:gap-4">
              <p className="text-sm">Produk</p>
              <p className="text-sm">Harga Crypto</p>
              <p className="text-sm">Biaya Transaksi</p>
              <p className="text-sm">OTC</p>
              <p className="text-sm">FAQ</p>
              <p className="text-sm">Bloc</p>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <h4 className="text-base font-bold">Perusahaan</h4>
            <div className="hidden md:flex md:flex-col md:mt-5 md:gap-4">
              <p className="text-sm">Tentang</p>
              <p className="text-sm">Hubungi Kami</p>
              <p className="text-sm">Karier</p>
              <p className="text-sm">Karier Engineering</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-10">
          <h4 className="text-sm font-bold">Terdaftar dan Diawasi</h4>
          <div className="flex flex-row gap-3 flex-wrap">
            <img
              className="w-36 h-10"
              src={require('../../assets/license-transparent.webp')}
              alt="license"
            />
            <img
              src={require('../../assets/iso27001.webp')}
              className="w-10 h-10"
              alt="iso-1"
            />
            <img
              src={require('../../assets/iso271017.webp')}
              className="w-10 h-10"
              alt="iso-2"
            />
          </div>
        </div>
        <div
          className="w-full h-[0.5px]"
          style={{
            backgroundColor: grayColorNavMenu
          }}
        ></div>
        <div className="flex flex-col gap-3">
          <p className="text-xs" style={{ color: textColorDetail }}>
            © 2023 PT. Pintu Kemana Saja. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: textColorDetail }}>
            Perdagangan aset crypto merupakan aktivitas beresiko tinggi. Kinerja
            pada masa lalu tidak mencerminkan kinerja di masa depan. Kinerja
            historikal, expected return dan proyeksi probabilitas disediakan
            untuk tujuan informasi dan illustrasi. Semua keputusan perdagangan
            aset crypto merupakan keputusan independen oleh pengguna.
          </p>
          <div className="text-xs flex flex-row gap-x-2 gap-y-5 flex-wrap">
            <a
              href="https://pintu.co.id/pages/syarat-dan-ketentuan"
              target="_blank"
              rel="noreferrer"
              style={{ color: textColorDetail }}
            >
              Syarat dan Ketentuan
            </a>
            <a
              href="https://pintu.co.id/pages/syarat-dan-ketentuan"
              target="_blank"
              rel="noreferrer"
              style={{ color: textColorDetail }}
            >
              Kebijakan Privasi
            </a>
            <a
              href="https://pintu.co.id/pages/syarat-dan-ketentuan"
              target="_blank"
              rel="noreferrer"
              style={{ color: textColorDetail }}
            >
              Kebijakan Sistem Manajemen Keamanan Informasi dan Layanan Cloud
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyDetail
