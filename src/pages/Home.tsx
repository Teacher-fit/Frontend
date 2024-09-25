import React, { useEffect, useState } from 'react'
import * as S from './Home.style'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBox from '../components/SearchBox'
import Checkbox from '../components/Checkbox'
import TextbookTable from '../components/TextbookTable'

const Home = () => {
  useEffect(() => {
    document.title = 'TeacherFit'
  }, [])

  const [edutech, setEdutech] = useState(false)
  const [activeButton, setActiveButton] = useState<string>('home')

  // 버튼 클릭 시 active 상태 변경
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName)
  }

  return (
    <S.Root>
      <Header />
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
        <S.SchoolCategory>초등학교</S.SchoolCategory>
        <S.SchoolCategory>중학교</S.SchoolCategory>
        <S.SchoolCategory>고등학교</S.SchoolCategory>
      </S.SchoolMenu>
      <S.SearchBox>
        <S.FilterMenu>
          <S.Label>학년 선택</S.Label>
          <S.FilterCategory>중1</S.FilterCategory>
          <S.FilterCategory>중2</S.FilterCategory>
          <S.FilterCategory>중3</S.FilterCategory>
        </S.FilterMenu>
        <S.FilterMenu>
          <S.Label>영역 선택</S.Label>
          <S.FilterCategory>도덕</S.FilterCategory>
        </S.FilterMenu>
        <S.FilterMenu>
          <S.Label>과목 선택</S.Label>
          <S.FilterCategory>도덕①</S.FilterCategory>
          <S.FilterCategory>도덕②</S.FilterCategory>
        </S.FilterMenu>
        <S.FilterMenu>
          <S.Label>출판사 선택</S.Label>
          <S.FilterCategory>미래엔</S.FilterCategory>
          <S.FilterCategory>천재</S.FilterCategory>
        </S.FilterMenu>
      </S.SearchBox>
      <S.Heading>단원 선택</S.Heading>
      <TextbookTable />
      <SearchBox />
      <S.Heading>
        나만의<S.Fit> fit</S.Fit>
      </S.Heading>
      <S.InputBox placeholder="수업 설계에 필요한 추가 요청사항이 있다면 여기에 작성해 주세요." />
      <Checkbox checked={edutech} onChange={setEdutech}>
        에듀테크 도구 활용 여부
      </Checkbox>
      <S.Detail>세부내용</S.Detail> {/* 세부 내용 페이지 확인하기 */}
      <S.BtnContainer>
        <S.SubmitBtn>활동 생성하기</S.SubmitBtn>
      </S.BtnContainer>
      <Footer />
    </S.Root>
  )
}

export default Home
