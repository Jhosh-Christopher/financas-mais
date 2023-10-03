import React from 'react'
import  Header  from '../../components/Header/Header'
import './globalStyle.css'
import BannerBemVindo from '../../components/BannerBemVindo/BannerBemVindo'
export const LandingPage = () => {
  return (
    <div><Header/>
    <BannerBemVindo/>
    </div>
  )
}

export default LandingPage