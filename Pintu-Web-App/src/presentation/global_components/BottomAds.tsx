import React from 'react'
import { blueColor, grayColorNavMenu } from '../../core/themeColor'
import StarIcon from '@mui/icons-material/Star'

const BottomAds: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0">
      <div className="flex md:hidden flex-col bg-white">
        <div
          className="h-0.5 w-full"
          style={{ backgroundColor: grayColorNavMenu }}
        />
        <div className="flex flex-col py-2.5 gap-2.5 px-4">
          <div className="flex flex-row gap-2.5">
            <img
              className="w-12 h-12"
              src={require('../../assets/logo_pintu.png')}
              alt="logo"
            />
            <div className="flex flex-col gap-0.5">
              <p className="text-sm font-bold">Pintu App</p>
              <p className="text-sm">
                The Easiest way to Trade Bitcoin and other Cryptos
              </p>
              <div className="flex flex-row gap-2.5 items-center">
                <div>
                  <StarIcon className="text-yellow-400" />
                  <StarIcon className="text-yellow-400" />
                  <StarIcon className="text-yellow-400" />
                  <StarIcon className="text-yellow-400" />
                  <StarIcon className="text-yellow-400" />
                </div>
                <p className="text-sm">10K+</p>
              </div>
            </div>
          </div>
          <a
            href="https://pintuinstall.onelink.me/fjuG?creative_id=278f1c2d-3237-4b5a-8530-339bbfb68fc9&amp;af_banner=true&amp;af_channel=Pintu_MobileWeb_Banner&amp;pid=Pintu%20Mobile%20Web&amp;c=PintuMarket&amp;af_dp=pintu://&amp;af_banner_build=utm&amp;af_banner_sdk_ver=2"
            target="_blank"
            className="w-full bg-blue-700 p-2.5 rounded-md border-none no-underline"
            rel="noreferrer"
          >
            <p className="text-sm text-center text-white font-bold">
              DOWNLOAD APP NOW
            </p>
          </a>
        </div>
      </div>
      <div
        className="hidden md:flex flex-row justify-between items-center py-5 px-8 gap-10"
        style={{
          backgroundColor: blueColor
        }}
      >
        <p className="text-base text-white font-bold">
          Investasi crypto simple, aman, dan tanpa ribet. Mulai dari Rp 11.000.
          Tertarik mulai berinvestasi?
        </p>
        <a
          href="https://pintuinstall.onelink.me/fjuG?creative_id=278f1c2d-3237-4b5a-8530-339bbfb68fc9&amp;af_banner=true&amp;af_channel=Pintu_MobileWeb_Banner&amp;pid=Pintu%20Mobile%20Web&amp;c=PintuMarket&amp;af_dp=pintu://&amp;af_banner_build=utm&amp;af_banner_sdk_ver=2"
          target="_blank"
          className="bg-white p-2.5 rounded-md border-none no-underline"
          rel="noreferrer"
        >
          <p
            className="text-sm font-bold text-center"
            style={{ color: blueColor }}
          >
            Unduh Pintu App
          </p>
        </a>
      </div>
    </div>
  )
}

export default BottomAds
