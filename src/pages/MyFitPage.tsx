import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import ChatLogo from '../assets/ChatLogo.svg'
import ReloadIcon from '../assets/ReloadIcon.svg'
import CopyIcon from '../assets/CopyIcon.svg'

/*
const SERVER_URL =
  'https://port-0-teachre-fit-m1rrtbdrebbb9bad.sel4.cloudtype.app/edu-recommend'


  const [answer, setAnswer] = useState(null)

  const fetchData = async () => {
    const response = await axios.get(SERVER_URL)
    setAnswer(response.data)
  }
  useEffect(() => {
    fetchData()
  }, [])
*/

const MyFitPage = () => {
  const [activeButton, setActiveButton] = useState<string>('home')

  // 버튼 클릭 시 active 상태 변경
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName)
  }

  const markdownText = `
  {"content":"## 교과\n도덕\n\n## 대상\n중학교 2학년\n\n## 단원\n우정과 사랑\n\n## 준비물\n- 흰색보드 또는 화이트보드\n- 마커\n- 에듀테크 제품: Padlet (https://padlet.com/)\n\n## 수업 방식\n그룹 활동 중심의 협력학습 방식을 활용하여 학생들이 진정한 우정을 찾을 수 있도록 유도합니다.\n\n## 에듀테크 제품\nPadlet: Padlet은 가상의 게시판을 제공하여 학생들이 아이디어를 공유하고 토론하는 데 사용할 수 있는 도구입니다. 학생들은 텍스트, 이미지, 동영상 등 다양한 형식으로 자신의 의견을 나타낼 수 있습니다. Padlet은 그룹 활동에 적합한 도구로, 학생들이 직접 참여하고 의견을 나눌 수 있는 환경을 제공합니다.\n\n## 수업 목표\n- 학생들은 진정한 우정의 의미와 중요성을 이해합니다.\n- 학생들은 자신의 주변에서 진정한 우정을 찾을 수 있는 능력을 배웁니다.\n- 학생들은 에듀테크 도구를 활용하여 의견을 나누고 협력하는 방법을 익힙니다.\n\n## 단계별 학습활동\n\n| **단계** | **학습활동** | **수업형태** |\n|---|---|---|\n| 도입 | 학생들에게 \"진정한 우정이란 무엇인지 생각해보세요. 어떤 친구들과 함께 있는 순간에 진정한 우정을 느끼나요?\"라고 묻습니다. 학생들은 간단한 글로 답변을 작성합니다. | 전체 학생들과 함께하는 그룹 토론 |\n| 전개1 | Padlet을 사용하여 학생들이 자신의 의견을 공유하도록 합니다. 학생들은 Padlet 보드에 자신의 의견을 작성하고, 다른 학생들의 의견에도 댓글을 달 수 있습니다. | 그룹 활동: 학생들을 4~5명씩 그룹으로 나누고, 각 그룹마다 하나의 Padlet 보드를 할당합니다. |\n| 전개2 | 각 그룹은 Padlet 보드를 통해 자신들의 의견을 공유하고 토론합니다. 그룹원들은 서로의 의견에 대해 존중하고 협력하여 진정한 우정에 대한 공통된 정의를 도출합니다. | 그룹 활동: 그룹원들끼리 의견을 나누고 토론하는 시간을 가집니다. |\n| 마무리 | 각 그룹은 Padlet 보드에 도출된 공통된 정의를 정리하고 발표합니다. 전체 학생들은 다른 그룹의 발표를 듣고 자신의 의견을 추가할 수 있습니다. | 전체 학생들과 함께하는 그룹 토론 |\n\n## 활용효과\n- 학생들은 에듀테크 도구를 활용하여 자신의 의견을 표현하고 다른 학생들과 소통하는 능력을 향상시킬 수 있습니다.\n- 그룹 활동을 통해 학생들은 협력과 토론의 중요성을 배우고 실제 상황에서 적용할 수 있습니다.\n- Padlet을 활용하여 학생들은 자신의 의견을 보다 쉽게 정리하고 공유할 수 있습니다.\n- 학생들은 진정한 우정에 대한 이해를 높이고, 자신의 주변에서 진정한 우정을 찾을 수 있는 능력을 배웁니다."}
  `

  return (
    <Root>
      <Menu>
        <MenuCategory
          isActive={activeButton === 'home'}
          onClick={() => handleButtonClick('home')}
        >
          HOME
        </MenuCategory>
        <MenuCategory
          isActive={activeButton === 'fit'}
          onClick={() => handleButtonClick('fit')}
        >
          나만의 <Fit>Fit</Fit> 찾기
        </MenuCategory>
      </Menu>
      <AnswerBox>
        <AnswerInfo>
          <img src={ChatLogo} />
        </AnswerInfo>
        <MarkdownWrapper>
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </MarkdownWrapper>
        <IconWrapper>
          <Icon src={ReloadIcon} />
          <CopyToClipboard
            text={markdownText}
            onCopy={() => alert('결과가 복사되었습니다.')}
          >
            <Icon src={CopyIcon} />
          </CopyToClipboard>
        </IconWrapper>
      </AnswerBox>
      <BtnContainer>
        <SubmitBtn>활동 생성하기</SubmitBtn>
      </BtnContainer>
    </Root>
  )
}

export default MyFitPage

// styled-component
export const Root = styled.div`
  min-height: 60vh; /* Viewport Height, 화면 전체 높이 */
  display: flex;
  flex-direction: column; /* Column으로 쌓이도록 설정 */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 900px;
`
export const Menu = styled.div`
  display: flex; /* inline-flex를 flex로 변경 */
  padding: 6px;
  align-items: flex-start;
  text-align: center;
  gap: 6px;
  margin: 0;
  margin-bottom: 51px;
  margin-top: 50px;
  width: 35%;
  font-size: 16px;

  border-radius: 8px;
  border: var(--sds-size-stroke-border) solid #d3d5ff;
  opacity: var(--sds-size-stroke-border);
  background: #f7f7ff;
`

export const MenuCategory = styled.button<{ isActive: boolean }>`
  flex-grow: 1; /* 각 버튼이 동일한 너비를 가짐 */
  background-color: ${({ isActive }) => (isActive ? '#D3D5FF' : '#ffffff')}; !important
  font-size: 15px;
  color: ${({ isActive }) => (isActive ? '#666' : '#000000')};
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  white-space: nowrap;
  font-weight: bold;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  appearance: none;
  transition: all 0.3s ease;
  width: auto;
  
  &:hover {
    background-color: #f0f0f0;
    color: #000000;
    border: 0;
    outline: none;
  }

  &:focus {
    outline: none; 
    border: none;   
  }
`

export const Fit = styled.span`
  color: #4049f4; /* 파란색으로 강조 */
  font-weight: bold;
`

export const AnswerBox = styled.div`
  width: 100%;
  height: auto;
  min-height: 130px;
  border-radius: 16px;
  background-color: #f7f7ff;
  border: solid #d3d5ff;
  padding: 20px;
  font-size: 18px;
  resize: none;
  overflow: hidden;
  border: #d3d5ff 1px solid;
  text-align: left;
`

export const AnswerInfo = styled.div`
  color: #666f8d;
  display: flex;
  font-size: 12px;
  gap: 10px;
  margin-top: 10px;
`

export const MarkdownWrapper = styled.div`
  margin-top: 30px;
  margin-left: 30px;
`

export const IconWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px;
  margin-top: 30px;
  margin-left: 8px;
`
export const Icon = styled.img`
  transition: transform 0.1s ease; /* 애니메이션 부드럽게 전환 */

  &:hover {
    transform: scale(1.05); /* 마우스 호버 시 이미지 크기 1.05배 */
  }
`

export const SubmitBtn = styled.button`
  margin-top: 20px;
  width: 170px;
  background-color: #4049f4;
  color: white;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  border-radius: 8px;
  padding: 10px;

  &:focus {
    outline: none;
    border: none;
  }
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  width: 100%;
  height: 100%;
  margin-top: 58px;
`
