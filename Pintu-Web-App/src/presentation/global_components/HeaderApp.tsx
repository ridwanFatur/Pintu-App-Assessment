import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'

const HeaderApp: React.FC = () => {
  const menuDashboardList: string[] = [
    'Fitur',
    'PTU',
    'Edukasi',
    'Ikuti Kami',
    'Blog & News',
    'Karier'
  ]

  return (
    <div className="flex flex-row py-7 px-5 justify-between w-full md:w-11/12 md:self-center lg:w-4/5 lg:self-center">
      <img
        src={require('../../assets/logo_splash_screen_color.png')}
        className="w-24 h-8"
        alt="logo-icon-pintu"
      />
      <div className="block md:hidden">
        <MenuIcon style={{ width: '30px', height: '30px' }} />
      </div>

      <div className="hidden md:flex md:gap-5 lg:gap-10">
        {menuDashboardList.map((e, index) => {
          return (
            <p className="text-xl cursor-pointer" key={index}>
              {e}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default HeaderApp
