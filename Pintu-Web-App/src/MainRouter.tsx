import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MarketScreenContext from './presentation/market_screen/MarketScreenContext'
import NotFoundScreen from './presentation/not_found_screen/NotFoundScreen'

const MainRouter: React.FC = () => {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MarketScreenContext />} />
          <Route path="/market" element={<MarketScreenContext />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MainRouter
