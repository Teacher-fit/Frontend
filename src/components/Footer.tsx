import React from 'react'
import * as S from './Footer.style'

import logo from '../assets/LogoTitle.svg'

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterMenu src={logo} alt="로고" />
      <div>
        <p style={{ fontSize: '1.05em' }}>footer 어쩌구</p>
      </div>
    </S.FooterContainer>
  )
}

export default Footer
