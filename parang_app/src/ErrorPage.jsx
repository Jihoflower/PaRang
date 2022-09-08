import React from 'react'
import { FishingLottie } from './LottieFiles/FishingLottie'
import { Lottie } from 'react-lottie-player'
import zIndex from '@mui/material/styles/zIndex'



export const ErrorPage = () => {
  return (
    <div>
      <p>asdasdasd</p>
      <div style={{ position: 'relative', top: -100, zIndex: '-3' }}>
        <FishingLottie />
      </div>
    </div>
  )
}
