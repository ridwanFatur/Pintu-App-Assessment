import React from 'react'
import TopTokenContent from './components/TopTokenContent'
import AboutComponent from './components/AboutComponent'
import TokenListComponent from './components/TokenListComponent'
import MarketFilterComponent from './components/MarketFilterComponent'

const MarketScreen: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-5">
      <TopTokenContent />
      <MarketFilterComponent />
      <TokenListComponent />
      <AboutComponent />
    </div>
  )
}

export default MarketScreen
