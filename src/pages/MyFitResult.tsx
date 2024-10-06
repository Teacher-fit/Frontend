import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Header from '../components/Header'

import ChatLogo from '../assets/ChatLogo.svg'
import ReloadIcon from '../assets/ReloadIcon.svg'
import CopyIcon from '../assets/CopyIcon.svg'

const MyFitResult = () => {
  const location = useLocation()
  const prevdata = useState<Object>
  const { content } = location.state || { content: '응답이 없습니다.' } // 서버 응답 데이터 받기
  //const ansString = JSON.stringify(content);
  const ansString = content
  const [activeButton, setActiveButton] = useState<string>('home')

  // 버튼 클릭 시 active 상태 변경
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName)
  }

  return (
    <Root>
      <Header />
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
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{ansString}</ReactMarkdown>
        </MarkdownWrapper>
        <IconWrapper>
          <Icon src={ReloadIcon} />
          <CopyToClipboard
            text={ansString}
            onCopy={() => alert('결과가 복사되었습니다.')}
          >
            <Icon src={CopyIcon} />
          </CopyToClipboard>
        </IconWrapper>
      </AnswerBox>
      <BtnContainer>
        <SubmitBtn>
          <Link to="/myfit">돌아가기</Link>
        </SubmitBtn>
      </BtnContainer>
    </Root>
  )
}

export default MyFitResult

// styled-component
export const Root = styled.div`
  min-height: 60vh; /* Viewport Height, 화면 전체 높이 */
  display: flex;
  flex-direction: column; /* Column으로 쌓이도록 설정 */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 900px;
  max-width: 1100px;
  margin: 0 auto;
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
  margin-right: 30px;

  /* 표 테두리 스타일 추가 */
  export const MarkdownWrapper = styled.div
  margin-top: 30px;
  margin-left: 30px;

  /* Heading 태그 앞에 마진 추가 */
  h1, h2, h3, h4, h5, h6 {
    margin-top: 1em; /* 각 단락이 Heading으로 구분될 수 있도록 */
  }

  /* table의 데이터 가운데 정렬 */
  table {
    width: 100%; 
    border-collapse: collapse;
    text-align: center; /* 테이블 안의 데이터 가운데 정렬 */
    margin-top: 0.4em;
  }

  th, td {
    border: 0.3px solid lightgray;
    padding: 8px;
  }

  /* 첫 번째 열 전체의 배경색 변경 */
  thead {
    background-color: #EAEAF8;
  }

  /* H2 태그의 크기를 H3 크기로 줄임 */
  h2 {
    font-size: 1.17em; 
    margin-bottom: 0.1em;
  }

  li {
    margin-left: 20px;
  }
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
