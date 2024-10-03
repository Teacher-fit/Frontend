import * as S from './Menu.style'
import { Link } from 'react-router-dom'

const ScrollToTop = () => {
  return (
    <S.Menu>
      <S.MenuCategory isActive={true} as={Link} to="/landing">
        HOME
      </S.MenuCategory>
      <S.MenuCategory isActive={false}>
        나만의 <S.Fit>Fit</S.Fit> 찾기
      </S.MenuCategory>
    </S.Menu>
  )
}

export default ScrollToTop
