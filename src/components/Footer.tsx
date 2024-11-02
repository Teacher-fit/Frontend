import * as S from './Footer.style'

import FooterLogo from '../../public/assets/FooterLogo.svg'
import Copyright from '../../public/assets/Copyright.svg'

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
        </S.DivLogoZone>
      </S.DivContents>
    </S.FooterContainer>
  )
}

export default Footer
