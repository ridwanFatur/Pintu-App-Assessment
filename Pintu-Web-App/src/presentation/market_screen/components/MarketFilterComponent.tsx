import React from 'react'
import LayersIcon from '@mui/icons-material/Layers'
import { blueColor } from '../../../core/themeColor'
import { marketFilterList } from '../../../domain/entities/MarketFilter'

const MarketFilterComponent: React.FC = () => {
  return (
    <div className="flex flex-row w-full gap-[10px] overflow-x-auto md:w-[calc(100%-40px)] md:self-center lg:w-[calc(80%-40px)] lg:self-center">
      {marketFilterList.map((e, index) => {
        return (
          <div
            key={index}
            className="flex flex-row items-center cursor-pointer gap-3 rounded-[5px] px-[12px] py-[5px]"
            style={{
              backgroundColor: '#d3def0'
            }}
          >
            <LayersIcon
              style={{ width: '25px', height: '25px', color: blueColor }}
            />
            <p className="whitespace-nowrap" style={{ color: blueColor }}>
              {e.title}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default MarketFilterComponent
