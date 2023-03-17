import React from 'react'
import LearnMoreButton from '../../global_components/LearnMoreButton'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin'
import { blueColor } from '../../../core/themeColor'

const AboutComponent: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-5">
      <div className="flex flex-col items-start gap-3 py-0 px-5">
        <div
          className="flex flex-col w-full gap-[10px] items-start md:w-full md:self-center md:py-5 md:px-12 md:border-solid md:border md:rounded-[10px] lg:w-4/5"
          style={{
            borderColor: 'rgb(224, 215, 215)'
          }}
        >
          <h4 className="text-base">Tentang Cryptocurrency</h4>
          <p className="text-sm text-gray-500">
            Cryptocurrency adalah aset mata uang digital yang diamankan
            menggunakan metode cryptography diatas open database yang disebut
            blockchain. Terdapat 2 jenis crypto, yaitu coin dan token. Coin
            adalah cryptocurrency yang berdiri diatas blockchain-nya sendiri
            dengan contoh bitcoin dan ethereum, sedangkan token adalah
            cryptocurrency yang “menumpang” diatas blockchain dari native aset
            lain.
          </p>
          <LearnMoreButton />
        </div>

        <div className="w-full grid grid-cols-1 gap-[10px] md:w-full md:self-center md:grid md:grid-cols-3 md:gap-[10px] lg:w-4/5">
          <div className="flex flex-col gap-3">
            <CurrencyBitcoinIcon
              className="text-orange-500 mt-10"
              style={{ width: '80px', height: '80px' }}
            />
            <h4 className="text-base">Kenapa Investasi Bitcoin?</h4>
            <p className="text-sm text-gray-500 mb-5">
              Pasokan total Bitcoin dibatasi oleh kode protokol Bitcoin menjadi
              21,000,000 BTC. Oleh karena itu, banyak investor membeli dan
              menyimpan Bitcoin secara jangka panjang karena mereka percaya
              nantinya Bitcoin akan menjadi langka seperti emas.
            </p>
            <LearnMoreButton isTextView={true} />
          </div>

          <div className="flex flex-col gap-3">
            <CurrencyBitcoinIcon
              className="text-orange-500 mt-10"
              style={{ width: '80px', height: '80px' }}
            />
            <h4 className="text-base">Apa itu Bitcoin dan blockchain?</h4>
            <p className="text-sm text-gray-500 mb-5">
              Bitcoin merupakan aset digital/cryptocurrency pertama yang
              menggunakan teknologi blockchain. Teknologi ini berguna untuk
              memastikan semua transaksi aman dan tidak dapat diubah. Sebagai
              aset digital di blockchain, Bitcoin (BTC) sepenuhnya digital dan
              tidak memiliki bentuk fisik apa pun.
            </p>
            <LearnMoreButton isTextView={true} />
          </div>

          <div className="flex flex-col gap-3">
            <CurrencyBitcoinIcon
              className="text-orange-500 mt-10"
              style={{ width: '80px', height: '80px' }}
            />
            <h4 className="text-base">
              Bagaimana Cara Invest Crypto di Pintu?
            </h4>
            <p className="text-sm text-gray-500 mb-5">
              Sebelum kamu berinvestasi crypto di Pintu, ada beberapa langkah
              yang harus kamu ikuti, salah satunya menyiapkan KTP kamu. Namun
              jangan khawatir, karena proses ini mudah dan hanya butuh waktu 10
              menit saja.
            </p>
            <LearnMoreButton isTextView={true} />
          </div>
        </div>
      </div>
      <div
        className="mt-24 rounded-tl-[60px] rounded-tr-[60px] w-full flex flex-col items-center pt-5 px-5 pb-0 md:w-11/12 md:self-center md:relative md:flex md:flex-col md:items-start md:pt-10 md:px-12 md:pb-16"
        style={{
          backgroundColor: blueColor
        }}
      >
        <h1 className="text-white text-3xl">Mulai investasi sekarang</h1>
        <p className="text-sm text-white">
          Daftar dalam hitungan menit, langsung mulai investasi.
        </p>
        <div className="py-2 px-5 rounded-[5px] mt-[30px] bg-white w-full md:w-max">
          <p
            className="text-base font-bold text-center"
            style={{ color: blueColor }}
          >
            Download Sekarang
          </p>
        </div>
        <img
          className="static w-4/5 h-48 object-contain self-center md:absolute md:right-10 md:w-96 md:h-96 md:object-contain md:self-center md:bottom-[-51px]"
          src={require('../../../assets/brand-ambassador-mobile.webp')}
          alt="brand-logo"
        />
      </div>
    </div>
  )
}

export default AboutComponent
