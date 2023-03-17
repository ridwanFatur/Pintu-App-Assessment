import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const LearnMoreButton: React.FC<{ isTextView?: boolean }> = ({
  isTextView
}) => {
  if (isTextView === undefined || !isTextView) {
    return (
      <div
        className="flex flex-row items-center cursor-pointer gap-3 py-2 px-7 rounded-2xl border-solid border-black"
        style={{
          borderWidth: '1px'
        }}
      >
        <p className="font-bold text-xs">Pelajari Lebih Lanjut</p>
        <ArrowForwardIcon
          className="text-black"
          style={{ width: '14px', height: '14px' }}
        />
      </div>
    )
  } else {
    return (
      <div className="flex flex-row items-center cursor-pointer gap-3">
        <p className="text-base font-bold">Pelajari Lebih Lanjut</p>
        <ArrowForwardIcon
          className="text-black"
          style={{ width: '16px', height: '16px' }}
        />
      </div>
    )
  }
}

export default LearnMoreButton
