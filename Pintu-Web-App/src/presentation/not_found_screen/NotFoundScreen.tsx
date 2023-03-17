import React from 'react'
import { blueColor, cyanColor } from '../../core/themeColor'

const NotFoundScreen: React.FC = () => {
  const menuList: string[] = [
    'Beranda',
    'Biaya-biaya',
    'Market',
    'Pintu Academy',
    'Earn',
    'Blog',
    'PTU Token',
    'News',
    '',
    'Karier'
  ]

  return (
    <div className="flex flex-col w-full gap-7 pt-0 px-5 pb-10 md:flex-row lg:w-4/5 lg:m-auto">
      <div
        className="flex items-center justify-center w-4/5 aspect-square rounded-3xl self-center mt-12"
        style={{
          backgroundColor: cyanColor,
          maxWidth: '300px'
        }}
      >
        <h1 className="text-white text-8xl">404</h1>
      </div>
      <div className="flex flex-col w-full gap-7">
        <h1>Halaman tidak ditemukan</h1>
        <p>URL yang dituju mungkin salah atau kedaluwarsa.</p>
        <div className="grid grid-cols-2 gap-x-2 gap-y-5">
          {menuList.map((e, index) => {
            return (
              <p
                key={index}
                className="text-sm font-bold"
                style={{
                  color: blueColor
                }}
              >
                {e}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default NotFoundScreen
