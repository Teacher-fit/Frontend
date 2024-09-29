import { useState } from 'react'
import * as S from './Home.style'
//import Footer from '../components/Footer'
import SearchBox from '../components/SearchBox'
import Checkbox from '../components/Checkbox'
import TextbookTable from '../components/TextbookTable'
import { Link } from 'react-router-dom'
import AutoResizeInputBox from '../components/AutoResizeInputBox'

const Home = () => {
  const [edutech, setEdutech] = useState(false)
  const [activeButton, setActiveButton] = useState<string>('home')

  // 하나의 선택된 카테고리 인덱스를 관리하기 위한 상태
  const [selectedSchool, setSelectedSchool] = useState<number | null>(null)

  // SchoolCategory 클릭 시 상태 업데이트
  const handleSchoolClick = (index: number) => {
    setSelectedSchool(index)
  }

  // FilterCategory를 Label 그룹별로 관리
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null)
  const [selectedArea, setSelectedArea] = useState<number | null>(null)
  const [selectedSubject, setSelectedSubject] = useState<number | null>(null)
  const [selectedPublisher, setSelectedPublisher] = useState<number | null>(
    null
  )

  // 버튼 클릭 시 active 상태 변경
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName)
  }

  return (
    <S.Root>
      <S.Menu>
        <S.MenuCategory
          isActive={activeButton === 'home'}
          onClick={() => handleButtonClick('home')}
        >
          HOME
        </S.MenuCategory>
        <S.MenuCategory
          isActive={activeButton === 'fit'}
          onClick={() => handleButtonClick('fit')}
        >
          나만의 <S.Fit>Fit</S.Fit> 찾기
        </S.MenuCategory>
      </S.Menu>
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
              onClick={() => setSelectedGrade(index)}
              isActive2={selectedGrade === index}
              style={{
                backgroundColor:
                  selectedGrade === index ? '#6E75F5' : '#ffffff',
              }}
            >
              {grade}
            </S.FilterCategory>
          ))}
        </S.FilterMenu>
        <S.FilterMenu>
          <S.Label>영역 선택</S.Label>
          <S.FilterCategory
            onClick={() => setSelectedArea(0)}
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
            onClick={() => setSelectedSubject(0)}
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
            onClick={() => setSelectedPublisher(1)}
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
      <TextbookTable />
      <SearchBox />
      <S.Heading>
        나만의<S.Fit> fit</S.Fit>
      </S.Heading>
      <AutoResizeInputBox placeholder="수업 설계에 필요한 추가 요청사항이 있다면 여기에 작성해 주세요." />
      <Checkbox checked={edutech} onChange={setEdutech}>
        에듀테크 도구 활용 여부
      </Checkbox>
      <S.Detail>세부 내용</S.Detail> {/* 세부 내용 페이지 확인하기 */}
      <S.BtnContainer>
        <S.SubmitBtn as={Link} to="/MyFit">
          활동 생성하기
        </S.SubmitBtn>
      </S.BtnContainer>
    </S.Root>
  )
}

export default Home
