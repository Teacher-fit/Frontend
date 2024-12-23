import axios from 'axios'
import { useState } from 'react'
import * as S from './MyFit.style'
import { useNavigate } from 'react-router-dom'
import TextbookTable from '../../components/TextbookTable'
import AutoResizeInputBox from '../../components/AutoResizeInputBox'
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import DetailIcon from '../../../public/assets/DetailIcon.svg'
import Loading from '../../components/Loading/Loading'
import Tooltip from '../../components/Tooltip'

// requestData의 타입 정의
interface RequestData {
  grade: number | null
  main_chapter: number
  sub_chapter: number
  small_chapter: number
  requirement: string
  use_edutech_tool: true
}

// Home 컴포넌트 정의
const MyFit = () => {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL

  const [isComplete, setIsComplete] = useState(false) // TextbookTable에서 받는 완료 상태
  const [selectedIds, setSelectedIds] = useState<number[]>([]) // 선택된 ID 배열 -> TextbookTable 단원 배열?
  const [responseData, setResponseData] = useState(null) // 서버 응답 상태 추가
  const [loading, setLoading] = useState(false) // 로딩 상태 추가
  const navigate = useNavigate() // 페이지 이동을 위한 훅

  // 선택된 학교 상태 관리
  const [selectedSchool, setSelectedSchool] = useState<number | null>(null)

  // 클릭 상태 확인
  const [clicked1, setClicked1] = useState(false) // 영역 -> '도덕' 선택을 위함
  const [clicked2, setClicked2] = useState(false) // 과목 선택 -> '도덕1' 선택을 위함
  const [clicked3, setClicked3] = useState(false) // 출판사 선택 -> '천재' 선택을 위함

  // TextbookTable에서 선택 완료 상태를 업데이트하는 함수
  const handleCompletionStatusChange = (complete: boolean, ids: number[]) => {
    setIsComplete(complete)
    setSelectedIds(ids)
    handleFilterChange('main_chapter', ids[0])
    handleFilterChange('sub_chapter', ids[1])
    handleFilterChange('small_chapter', ids[2])
  }

  // 필터 및 입력 데이터를 저장할 상태 정의
  const [requestData, setRequestData] = useState<RequestData>({
    grade: null,
    main_chapter: 0,
    sub_chapter: 0,
    small_chapter: 0,
    requirement: '',
    use_edutech_tool: true,
  })

  // SchoolCategory 클릭 시 상태 업데이트
  const handleSchoolClick = (index: number) => {
    setSelectedSchool(index)
  }
  // 필터 메뉴에서 선택한 데이터를 저장하는 함수
  const handleFilterChange = (key: keyof RequestData, value: number | null) => {
    setRequestData((prevData) => ({
      ...prevData,
      [key]: value,
    }))
    console.log(requestData)
  }

  // 텍스트 입력을 처리하는 함수
  const handleInputChange = (value: string) => {
    setRequestData((prevData) => ({
      ...prevData,
      requirement: value,
    }))
  }
  // AutoResizeInputBox의 onChange 핸들러 수정
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleInputChange(e.target.value)
  }

  // POST 요청 보내는 함수
  const submitData = async () => {
    setLoading(true) // 로딩 시작
    try {
      const response = await axios.post(SERVER_URL, requestData)
      console.log('서버 응답:', response.data)
      setResponseData(response.data) // 응답 데이터 저장
      // 요청 데이터와 응답 데이터를 함께 전달하여 이동
      navigate('/result', {
        state: {
          content: response.data.content,
          use_video: response.data.use_video,
          requestData,
        },
      })
    } catch (error) {
      console.error('데이터 전송 실패:', error)
    } finally {
      setLoading(false) // 로딩 종료
    }
  }

  return (
    <S.Root>
      {loading && <Loading />} {/* 로딩 상태일 때 로딩 컴포넌트 표시 */}
      {!loading && (
        <>
          <Header />
          <Menu />
          <S.SchoolMenu>
            <S.SchoolCategory
              $isActive1={false}
              onClick={() => alert('콘텐츠 개발중입니다.')}
            >
              초등학교
            </S.SchoolCategory>
            <S.SchoolCategory
              $isActive1={selectedSchool === 1}
              onClick={() => handleSchoolClick(1)}
              style={{
                backgroundColor: selectedSchool === 1 ? '#6E75F5' : '#ffffff',
              }}
            >
              중학교
            </S.SchoolCategory>
            <S.SchoolCategory
              $isActive1={false}
              onClick={() => alert('콘텐츠 개발중입니다.')}
            >
              고등학교
            </S.SchoolCategory>
          </S.SchoolMenu>

          <S.SearchBox>
            <S.FilterMenu>
              <S.Label>학년 선택</S.Label>
              {['중1', '중2', '중3'].map((grade, index) => (
                <S.FilterCategory
                  key={index}
                  onClick={() => handleFilterChange('grade', index + 1)}
                  $isActive2={
                    requestData.grade !== null &&
                    requestData.grade - 1 === index
                  }
                  style={{
                    backgroundColor:
                      requestData.grade !== null &&
                      requestData.grade - 1 === index
                        ? '#6E75F5'
                        : '#ffffff',
                  }}
                >
                  {grade}
                </S.FilterCategory>
              ))}
            </S.FilterMenu>

            <S.FilterMenu>
              <S.Label>영역 선택</S.Label>
              <S.FilterCategory
                onClick={() => setClicked1(!clicked1)}
                $isActive2={clicked1}
                style={{
                  backgroundColor: clicked1 ? '#6E75F5' : '#ffffff',
                }}
              >
                도덕
              </S.FilterCategory>
            </S.FilterMenu>

            <S.FilterMenu>
              <S.Label>과목 선택</S.Label>
              <S.FilterCategory
                onClick={() => setClicked2(!clicked2)}
                $isActive2={clicked2}
                style={{
                  backgroundColor: clicked2 ? '#6E75F5' : '#ffffff',
                }}
              >
                도덕①
              </S.FilterCategory>
              <S.FilterCategory
                onClick={() => alert('콘텐츠 준비중입니다.')}
                $isActive2={false}
              >
                도덕②
              </S.FilterCategory>
            </S.FilterMenu>

            <S.FilterMenu>
              <S.Label>출판사 선택</S.Label>
              <S.FilterCategory
                onClick={() => alert('콘텐츠 준비중입니다.')}
                $isActive2={false}
              >
                미래엔
              </S.FilterCategory>
              <S.FilterCategory
                onClick={() => setClicked3(!clicked3)}
                $isActive2={clicked3}
                style={{
                  backgroundColor: clicked3 ? '#6E75F5' : '#ffffff',
                }}
              >
                천재
              </S.FilterCategory>
            </S.FilterMenu>
          </S.SearchBox>

          <S.Heading>단원 선택</S.Heading>
          {/* TextbookTable 컴포넌트에서 선택 완료 상태 업데이트 */}
          <TextbookTable
            onCompletionStatusChange={handleCompletionStatusChange}
          />

          <div style={{ marginTop: '89px' }}></div>
          <S.HeadingWrapper>
            <S.Heading style={{ margin: '0px' }}>
              나만의<S.Fit> fit</S.Fit>
            </S.Heading>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  alignItems: 'center',
                  color: '#6E75F5',
                  fontSize: '15px',
                  marginRight: '8px',
                  marginBottom: '6px',
                }}
              >
                에듀테크 도구 활용
              </span>
              <Tooltip
                message="<h3>에듀테크 도구 활용</h3>TeacherFit은 교사가 수업을 설계할 때, 에듀테크 도구를 사용할 수 있도록 도와줍니다. 에듀테크 도구를 활용하면 다양한 기술 기반 콘텐츠를 수업에 적용하여 학생들의 흥미와 학습 이해도를 높일 수 있습니다."
                direction="top"
              >
                <S.Detail
                  style={{ scale: 0.9 }}
                  src={DetailIcon}
                  alt="에듀테크"
                />
              </Tooltip>
            </div>
          </S.HeadingWrapper>
          <div style={{ marginBottom: '23px' }}></div>

          <AutoResizeInputBox
            placeholder="수업 설계에 필요한 추가 요청사항이 있다면 여기에 작성해 주세요."
            onChange={handleTextareaChange}
          />

          <S.BtnContainer>
            <S.SubmitBtn
              as="button"
              onClick={submitData}
              style={{
                color: isComplete ? '#fefefe' : '#666666',
                backgroundColor: isComplete ? '#4049F4' : '#cccccc',
              }}
              disabled={!isComplete}
            >
              활동 생성하기
            </S.SubmitBtn>
          </S.BtnContainer>
        </>
      )}
    </S.Root>
  )
}

export default MyFit
