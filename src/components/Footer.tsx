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
          <p style={{ marginRight: '50px' }}>|</p>
          <p style={{ fontSize: '1.07em', marginRight: '40px', whiteSpace: 'nowrap'}}>About us</p>
          <p style={{ marginRight: '50px' }}>|</p>
          <p style={{ fontSize: '1.05em', whiteSpace: 'nowrap' }}>개인정보 처리방침</p>
        </S.DivLogoZone>
      </S.DivContents>
    </S.FooterContainer>
  )
}

export default Footer
