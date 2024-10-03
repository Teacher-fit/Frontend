import styled from 'styled-components'
import { Link } from 'react-router-dom'

import img1 from '../assets/landing1.png'
import img2 from '../assets/landing3.png'
import Menu from '../components/Menu'

const Landing = () => {
  return (
    <>
      <Root>
        <Menu />
        <Img src={img1} />
        <Img src={img2} />
        <Btn as={Link} to="/myfit">
          <div>지금 티쳐핏 만나러 가기</div>
        </Btn>
      </Root>
    </>
  )
}

export default Landing

export const Root = styled.div`
  min-height: 80vh; /* Viewport Height, 화면 전체 높이 */
  display: flex;
  flex-direction: column; /* Column으로 쌓이도록 설정 */
  margin: 0;
  padding: 0;
  max-width: 100%;
`

export const Img = styled.img`
  padding: 0;
  margin: 0;
  width: 100%;
`

export const Btn = styled.button`
  width: 20%;
  background: linear-gradient(0deg, #2de19a 0%, #1cf59f 100%);
  color: #4049f4;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  border-radius: 1000px;
  padding: 10px;
  white-space: nowrap;
  position: fixed;
  display: flex;
  align-items: center;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  cursor: pointer;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */

  &:focus {
    outline: none;
    border: none;
  }
`
export const BtnContainer = styled.div`
  display: fix;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  width: 100%;
  height: 100%;
  text-align: center;
`
