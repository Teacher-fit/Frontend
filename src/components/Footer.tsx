import React from 'react'
import * as S from './Footer.style'

import FooterLogo from '../assets/FooterLogo.svg'
import Copyright from '../assets/Copyright.svg'

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.DivContents>
        <S.DivLogoZone>
          <S.ImgLogo src={FooterLogo} alt="작은로고" />
          <S.ImgLogo
            src={Copyright}
            alt="copyrightCOPYRIGHT ©️ TEACHERFIT.ALL RIGHTS RESERVED"
          />
          <p style={{ fontSize: '1.05em', marginRight: '26px' }}>About us</p>
          <p style={{ marginRight: '26px' }}>|</p>
          <p style={{ fontSize: '1.05em' }}>개인정보 처리방침</p>
        </S.DivLogoZone>
      </S.DivContents>
    </S.FooterContainer>
  )
}

export default Footer
