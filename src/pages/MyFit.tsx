import axios from 'axios'
import { useState } from 'react'
import * as S from './Myfit.style'
import { Link } from 'react-router-dom'
import TextbookTable from '../components/TextbookTable'
import AutoResizeInputBox from '../components/AutoResizeInputBox'
import Menu from '../components/Menu'
import Header from '../components/Header'

// 서버 URL 상수
const SERVER_URL =
  'https://port-0-teachre-fit-m1rrtbdrebbb9bad.sel4.cloudtype.app/edu-recommend'

// requestData의 타입 정의
interface RequestData {
  grade: number | null
  area: number | null
  subject: number | null
  publisher: number | null
  requirement: string
}

// Home 컴포넌트 정의
const MyFit = () => {
  const [isComplete, setIsComplete] = useState(false) // TextbookTable에서 받는 완료 상태
  const [selectedIds, setSelectedIds] = useState<number[]>([]) // 선택된 ID 배열

  // TextbookTable에서 선택 완료 상태를 업데이트하는 함수
  const handleCompletionStatusChange = (complete: boolean, ids: number[]) => {
    setIsComplete(complete)
    setSelectedIds(ids)
  }

  // 선택된 학교 상태 관리
  const [selectedSchool, setSelectedSchool] = useState<number | null>(null)

  // 선택된 필터 데이터 상태 관리
  const [selectedArea, setSelectedArea] = useState<number | null>(null)
  const [selectedSubject, setSelectedSubject] = useState<number | null>(null)
  const [selectedPublisher, setSelectedPublisher] = useState<number | null>(
    null
  )

  // 필터 및 입력 데이터를 저장할 상태 정의
  const [requestData, setRequestData] = useState<RequestData>({
    grade: null,
    area: null,
    subject: null,
    publisher: null,
    requirement: '',
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
  }

  // 텍스트 입력을 처리하는 함수
  const handleInputChange = (value: string) => {
    setRequestData((prevData) => ({
      ...prevData,
      requirement: value,
    }))
  }

  // AutoResizeInputBox의 onChange 핸들러를 수정합니다.
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleInputChange(e.target.value)
  }

  // POST 요청 보내는 함수
  const submitData = async () => {
    console.log(requestData) // 서버로 보낼 데이터 확인
    try {
      const response = await axios.post(SERVER_URL, requestData)
      console.log('서버 응답:', response.data)
    } catch (error) {
      console.error('데이터 전송 실패:', error)
    }
  }

  return (
    <S.Root>
      <Header />
      <Menu />
      <S.SchoolMenu>
        <S.SchoolCategory
          isActive1={false}
          onClick={() => alert('콘텐츠 개발중입니다.')}
        >
          초등학교
        </S.SchoolCategory>
        <S.SchoolCategory
          isActive1={selectedSchool === 1}
          onClick={() => handleSchoolClick(1)}
          style={{
            backgroundColor: selectedSchool === 1 ? '#6E75F5' : '#ffffff',
          }}
        >
          중학교
        </S.SchoolCategory>
        <S.SchoolCategory
          isActive1={false}
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
              onClick={() => handleFilterChange('grade', index)}
              isActive2={requestData.grade === index}
              style={{
                backgroundColor:
                  requestData.grade === index ? '#6E75F5' : '#ffffff',
              }}
            >
              {grade}
            </S.FilterCategory>
          ))}
        </S.FilterMenu>

        <S.FilterMenu>
          <S.Label>영역 선택</S.Label>
          <S.FilterCategory
            onClick={() => handleFilterChange('area', 0)}
            isActive2={selectedArea === 0}
            style={{
              backgroundColor: selectedArea === 0 ? '#6E75F5' : '#ffffff',
            }}
          >
            도덕
          </S.FilterCategory>
        </S.FilterMenu>

        <S.FilterMenu>
          <S.Label>과목 선택</S.Label>
          <S.FilterCategory
            onClick={() => handleFilterChange('subject', 0)}
            isActive2={selectedSubject === 0}
            style={{
              backgroundColor: selectedSubject === 0 ? '#6E75F5' : '#ffffff',
            }}
          >
            도덕①
          </S.FilterCategory>
          <S.FilterCategory
            onClick={() => alert('콘텐츠 준비중입니다.')}
            isActive2={false}
          >
            도덕②
          </S.FilterCategory>
        </S.FilterMenu>

        <S.FilterMenu>
          <S.Label>출판사 선택</S.Label>
          <S.FilterCategory
            onClick={() => alert('콘텐츠 준비중입니다.')}
            isActive2={false}
          >
            미래엔
          </S.FilterCategory>
          <S.FilterCategory
            onClick={() => handleFilterChange('publisher', 1)}
            isActive2={selectedPublisher === 1}
            style={{
              backgroundColor: selectedPublisher === 1 ? '#6E75F5' : '#ffffff',
            }}
          >
            천재
          </S.FilterCategory>
        </S.FilterMenu>
      </S.SearchBox>

      <S.Heading>단원 선택</S.Heading>
      {/* TextbookTable 컴포넌트에서 선택 완료 상태 업데이트 */}
      <TextbookTable onCompletionStatusChange={handleCompletionStatusChange} />

      <S.Heading>
        나만의<S.Fit> fit</S.Fit>
      </S.Heading>

      <AutoResizeInputBox
        placeholder="수업 설계에 필요한 추가 요청사항이 있다면 여기에 작성해 주세요."
        onChange={handleTextareaChange}
      />

      <S.BtnContainer>
        <S.SubmitBtn
          as={Link}
          to="/myfit"
          onClick={submitData}
          style={{
            color: isComplete ? '#fefefe' : '#666666',
            backgroundColor: isComplete ? '#4049F4' : '#cccccc',
          }}
          disabled={!isComplete} // isComplete 상태에 따라 버튼 비활성화
        >
          활동 생성하기
        </S.SubmitBtn>
      </S.BtnContainer>
    </S.Root>
  )
}

export default MyFit
