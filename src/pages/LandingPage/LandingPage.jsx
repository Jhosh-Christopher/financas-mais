import React from 'react'
import  Header  from '../../components/Header/Header'
import './globalStyle.css'
import BannerBemVindo from '../../components/BannerBemVindo/BannerBemVindo'
import BannerDesafio from '../../components/BannerDesafio/BannerDesafio'
export const LandingPage = () => {
  return (
    <div><Header/>
    <BannerBemVindo/>
    <BannerDesafio/>
    </div>
  )
}

export default LandingPage