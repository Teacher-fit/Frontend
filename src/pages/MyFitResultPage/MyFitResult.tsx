import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import * as S from './MyFitResult.style'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import axios from 'axios'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import Loading from '../../components/Loading/Loading'
import ChatLogo from '../../../public/assets/ChatLogo.svg'
import ReloadIcon from '../../../public/assets/ReloadIcon.svg'
import CopyIcon from '../../../public/assets/CopyIcon.svg'

const MyFitResult = () => {
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const { content, use_video, requestData } = location.state || {}
  const ansString = content || ''
  const videoList = use_video || []

  const [responseData, setResponseData] = useState(null) // 서버 응답 상태 추가

  const SERVER_URL = import.meta.env.VITE_SERVER_URL

  const reloadData = async () => {
    console.log(requestData)
    console.log(responseData)
    setLoading(true) // 로딩 시작
    try {
      const response = await axios.post(SERVER_URL, requestData)
      console.log('서버 응답:', response.data)
      setResponseData(response.data) // 응답 데이터 저장 (자동 리렌더링 유도)
    } catch (error) {
      console.error('데이터 전송 실패:', error)
    } finally {
      setLoading(false) // 로딩 종료
    }
  }

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
        <S.Root>
          <Header />
          <Menu />
          <S.AnswerBox>
            <S.AnswerInfo>
              <img
                src={ChatLogo}
                style={{
                  marginBottom: '10px',
                  marginLeft: '8px',
                  scale: '1.2',
                }}
              />
            </S.AnswerInfo>
            <S.MarkdownWrapper>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {ansString}
              </ReactMarkdown>
            </S.MarkdownWrapper>

            {videoList.length > 0 &&
              videoList.map((videoId: string, index: number) => (
                <S.VideoWrapper key={index}>
                  <LiteYouTubeEmbed id={videoId} noCookie={true} title="" />
                </S.VideoWrapper>
              ))}

            <S.IconWrapper>
              <S.Button as="button" onClick={reloadData}>
                <S.Icon src={ReloadIcon} />
              </S.Button>
              <CopyToClipboard
                text={ansString}
                onCopy={() => alert('결과가 복사되었습니다.')}
              >
                <S.Icon src={CopyIcon} />
              </CopyToClipboard>
            </S.IconWrapper>
          </S.AnswerBox>
          <S.BtnContainer>
            <S.SubmitBtn>
              <Link to="/myfit">돌아가기</Link>
            </S.SubmitBtn>
          </S.BtnContainer>
        </S.Root>
      )}
    </>
  )
}

export default MyFitResult
