import React from 'react'
import './brand.css'

import  google from '../../assets/google.png'
import  slack from '../../assets/slack.png'
import  atlassian from '../../assets/atlassian.png'
import  dropbox from '../../assets/dropbox.png'
import  shopify from '../../assets/shopify.png'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div className=''>
        <img src={google} alt="Google" />
      </div>
      <div className=''>
        <img src={slack} alt="Slack" />
      </div>
      <div className=''>
        <img src={atlassian} alt="Assian" />
      </div>
      <div className=''>
        <img src={dropbox} alt="DropBox" />
      </div>
      <div className=''>
        <img src={shopify} alt="Shopify" />
      </div>
    </div>
  )
}

export default Brand