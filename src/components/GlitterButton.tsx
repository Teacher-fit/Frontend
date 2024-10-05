import styled, { keyframes } from 'styled-components'

const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const glitterMove = keyframes`
  0% {
    transform: translateY(0); /* 위에서 시작 */
    opacity: 1; /* 초기 투명도 */
  }
  100% {
    transform: translateY(100vh); /* 아래로 이동 */
    opacity: 0; /* 사라지는 효과 */
  }
`;

// 글리터 요소
const Glitter = styled.div`
  position: absolute;
  width: 5px; /* 글리터 크기 */
  height: 5px;
  background: rgba(255, 255, 255, 0.8); /* 반짝이는 효과 */
  border-radius: 50%; /* 동그란 모양 */
  animation: ${glitterMove} 8s linear infinite; /* 8초 동안 반복 */
`;

// 버튼에 글리터 효과를 포함하는 컨테이너
export const BtnContainer = styled.div`
  position: relative; /* 자식의 위치를 컨테이너 기준으로 */
  overflow: hidden; /* 글리터가 버튼 밖으로 안 나가게 */
  width: fit-content; /* 글리터 효과가 버튼 크기에 맞게 */
`;

// 버튼 스타일
export const Btn = styled.button`
  width: 20%;
  background: linear-gradient(92deg, #868DF6, #4049F4);
  background-size: 300% 300%;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.1rem;
  text-align: center;
  border-radius: 1000px;
  padding: 15px 12px;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.30);
  animation: ${gradientMove} 8s linear infinite;
  left: 50%;
  bottom: 80px;
  transform: translateX(-50%);
`;

// 여러 개의 글리터 생성
const generateGlitters = () => {
  const glitters = [];
  for (let i = 0; i < 20; i++) { // 원하는 글리터 개수 조절
    const size = Math.random() * 4 + 1; // 랜덤 크기
    glitters.push(
      <Glitter
        key={i}
        style={{
          left: `${Math.random() * 100}%`, // 랜덤 위치
          top: `${Math.random() * -100}px`, // 위에서 시작
          width: `${size}px`, // 랜덤 너비
          height: `${size}px`, // 랜덤 높이
          animationDuration: `${Math.random() * 5 + 5}s`, // 랜덤 애니메이션 시간
          animationDelay: `${Math.random() * 5}s`, // 랜덤 딜레이
        }}
      />
    );
  }
  return glitters;
};

// 버튼 컴포넌트
const GlitterButton = () => (
  <BtnContainer>
    <Btn>지금 티쳐핏 만나러 가기</Btn>
    {generateGlitters()}
  </BtnContainer>
);

export default GlitterButton;