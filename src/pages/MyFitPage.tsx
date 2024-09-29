import { useState } from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

import ChatLogo from '../assets/ChatLogo.svg'
import ReloadIcon from '../assets/ReloadIcon.svg'
import CopyIcon from '../assets/CopyIcon.svg'

const MyFitPage = () => {
  const [activeButton, setActiveButton] = useState<string>('home')

  // 버튼 클릭 시 active 상태 변경
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName)
  }

  const markdownText = `
  ### 안녕하세요!
  현재 리액트에서 \`react-markdown\`를 이용하여 **마크다운**을 랜더링하고 있습니다.
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
          n:nn PM
        </AnswerInfo>
        <MarkdownWrapper>
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </MarkdownWrapper>
        <IconWrapper>
          <Icon src={ReloadIcon} />
          <Icon src={CopyIcon} />
        </IconWrapper>
      </AnswerBox>
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
  max-width: 3000px;
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
`

export const MarkdownWrapper = styled.div`
  margin-top: 20px;
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
