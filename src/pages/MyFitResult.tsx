import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Loading from '../components/Loading'

import ChatLogo from '../assets/ChatLogo.svg'
import ReloadIcon from '../assets/ReloadIcon.svg'
import CopyIcon from '../assets/CopyIcon.svg'

const MyFitResult = () => {
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const { content } = location.state || { content: '응답이 없습니다.' } // 서버 응답 데이터 받기
  const ansString = content

  // 로딩 추가
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 0)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Root>
          <Header />
          <Menu />
          <AnswerBox>
            <AnswerInfo>
              <img src={ChatLogo} style={{ marginBottom: '10px' }} />
            </AnswerInfo>
            <MarkdownWrapper>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {ansString}
              </ReactMarkdown>
            </MarkdownWrapper>
            <IconWrapper>
              <Icon
                src={ReloadIcon}
                // TODO: 답변 Reload 기능 구현
              />
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
      )}
    </>
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
  overflow-x: hidden;

  // layout
  @media screen and (max-width: 768px) {
    //모바일 환경
    margin-left: 20px;
    margin-right: 20px;
  }
  @media screen and (min-width: 768px) {
    //pc 환경
    margin-left: 220px;
    margin-right: 220px;
  }
`

export const AnswerBox = styled.div`
  width: 100%;
  height: auto;
  min-height: 130px;
  border-radius: 16px;
  background-color: #f7f7ff;
  border: solid #d3d5ff;
  padding: 30px;
  padding-left: 40px;
  padding-right: 40px;
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
  min-height: 100px;

  /* Heading 태그 앞에 마진 추가 */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1em; /* 각 단락이 Heading으로 구분될 수 있도록 */
  }

  /* table의 데이터 가운데 정렬 */
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: center; /* 테이블 안의 데이터 가운데 정렬 */
    margin-top: 0.4em;
  }

  th,
  td {
    border: 0.3px solid lightgray;
    padding: 8px;
  }

  /* 첫 번째 열 전체의 배경색 변경 */
  thead {
    background-color: #eaeaf8;
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
