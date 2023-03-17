import React, { useContext } from 'react'
import { MarketStateContext } from '../MarketScreenContext'
import MarketContentComponent from './MarketContentComponent'

const TokenListComponent: React.FC = () => {
  const { data } = useContext(MarketStateContext)

  if (data !== undefined) {
    return <MarketContentComponent data={data} />
  } else {
    return <div></div>
  }
}

export default TokenListComponent
