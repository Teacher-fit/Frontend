import React from 'react';
import * as S from './Header.style'

import { Link } from 'react-router-dom'
import logo from '../assets/LogoTitle.svg'

const Header = () => {
  return (
    <S.Header>
      <S.DivContents>
        <S.DivLogoZone>
          <Link to="/">
            <S.ImgLogo src={logo} alt="로고" />
          </Link>
          <div>
            <p style={{ fontSize: '1.05em' }}>
              티쳐핏은 교사의 디지털 수업 역량 강화를 위한 에듀테크 콘텐츠 설계를 위한 플랫폼입니다.
            </p>
          </div>
        </S.DivLogoZone>
      </S.DivContents>
    </S.Header>
  )
}

export default Header
