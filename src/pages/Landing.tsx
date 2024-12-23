import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

import img1 from '../../public/assets/Landing1.svg'
import img2 from '../../public/assets/Landing2.svg'
import img3 from '../../public/assets/Landing3.svg'
import img4 from '../../public/assets/Landing4.svg'
import img5 from '../../public/assets/Landing5.svg'
import img6 from '../../public/assets/Landing6.svg'
import img7 from '../../public/assets/Landing7.svg'
import lastgra from '../../public/assets/LandingLastGra.svg'

// 글리터 이동 애니메이션 정의
const glitterMove = keyframes`
  0% {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
  50% {
    transform: translateY(50vh) translateX(-10px); /* 중간에 좌우 움직임 */
    opacity: 0.8;
  }
  100% {
    transform: translateY(100vh) translateX(10px); /* 아래로 내려가며 좌우 흔들림 */
    opacity: 0;
  }
`

// 글리터의 반짝임 애니메이션 정의
const glitterTwinkle = keyframes`
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.4; /* 중간에 더 투명해졌다가 다시 밝아짐 */
  }
`

// 원형 글리터 요소
const Glitter = styled.div`
  position: absolute;
  width: 4px; /* 원의 크기 */
  height: 4px;
  background: rgba(255, 255, 255, 0.8); /* 흰색 반짝임 */
  border-radius: 50%; /* 동그라미 모양 */
  box-shadow: 0px 0px 6px 2px rgba(255, 255, 255, 0.5); /* 그림자 효과로 더 빛나게 */
  animation:
    ${glitterMove} 20s linear infinite,
    /* 20초 동안 천천히 내려오는 애니메이션 */ ${glitterTwinkle} 2.5s
      ease-in-out infinite; /* 반짝이는 효과를 위한 애니메이션 */
`

// 여러 개의 글리터 생성
const generateGlitters = () => {
  const glitters = []
  for (let i = 0; i < 50; i++) {
    const size = Math.random() * 4 + 2 // 원의 크기를 랜덤으로 설정 (최소 2px, 최대 6px)
    const horizontalMovement = Math.random() * 20 - 10 // 좌우 움직임 범위 (-10px ~ 10px)
    glitters.push(
      <Glitter
        key={i}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * -100}vh`,
          width: `${size}px`, // 랜덤 크기
          height: `${size}px`, // 랜덤 크기
          animationDuration: `${Math.random() * 20 + 15}s`, // 15초에서 35초까지 천천히 내려옴
          animationDelay: `${Math.random() * 5}s`,
          // 좌우 흔들림 범위 적용
          transform: `translateX(${horizontalMovement}px)`,
        }}
      />
    )
  }
  return glitters
}

// Root 컴포넌트
export const Root = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
`

// 이미지 스타일
export const Img = styled.img`
  padding: 0;
  margin: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
`

// 버튼 스타일
export const Btn = styled.button`
  width: clamp(
    180px,
    20%,
    250px
  ); /* 최소, 최대 값을 설정해 반응형으로 버튼 크기 조절 */
  background: linear-gradient(92deg, #868df6, #4049f4);
  color: #ffffff;
  font-weight: bold;
  font-size: 1.15em;
  text-align: center;
  white-space: nowrap;
  border-radius: 110px;
  padding: 14px 14px;
  position: fixed;
  display: flex;
  align-items: center;
  left: 50%;
  bottom: 7%;
  transform: translateX(-50%);
  cursor: pointer;
  justify-content: center;
  z-index: 10;
  border: #ccc 1.5px solid;

  &:focus {
    outline: none;
    border: none;
  }

  @media screen and (max-width: 768px) {
    //모바일 환경
    height: 60px;
  }
`

// Landing 페이지 컴포넌트
const Landing = () => {
  return (
    <Root>
      {/* 글리터 렌더링 */}
      {generateGlitters()}
      <Img src={img1} />
      <Img src={img2} />
      <Img src={img3} />
      <Img src={img4} />
      <Img src={img5} />
      <Img src={img6} />
      <Img src={img7} />
      <Img src={lastgra} />
      <Btn as={Link} to="/myfit">
        <div>티쳐핏 만나러 가기</div>
      </Btn>
    </Root>
  )
}

export default Landing
