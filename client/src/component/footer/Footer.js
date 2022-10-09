import React from 'react'
import { FooterWarper, Icon } from '../../styledComponent/footer_cs';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../img/icon';

const Footer = () => {
  return (

    <FooterWarper>
      <a href="https://ko-kr.facebook.com/" target="_blank"><Icon src={FacebookIcon} /></a>
      <a href="https://www.instagram.com/" target="_blank"><Icon src={InstagramIcon} /></a>
      <a href="https://twitter.com/?lang=ko" target="_blank"><Icon src={TwitterIcon} /></a>
    </FooterWarper>
  )
}

export default Footer;