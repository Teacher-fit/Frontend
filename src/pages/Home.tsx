import React from 'react'
import * as S from './Home.style'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBox from '../components/SearchBox'

const Home = () => {
  return (
    <S.Root>
      <Header />
      <S.Menu>
        <S.MenuCategory>HOME</S.MenuCategory>
        <S.MenuCategory>나만의 FIT 찾기</S.MenuCategory>
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
      <S.OlContainer>
        <S.Ol>
          <li>대단원</li>
          <li>I. 자신과의 관계</li>
          <li>II. 타인과의 관계</li>
          <li>III. 사회·공동체와의 관계</li>
          <li>IV. 자연과의 관계</li>
        </S.Ol>
        <S.Ol>
          <li>중단원</li>
          <li>1. 도덕적인 삶</li>
          <li>2. 도덕적 행동</li>
          <li>3. 자아 정체성</li>
          <li>4. 행복한 삶</li>
          <li>5. 행복한 삶</li>
        </S.Ol>
        <S.Ol>
          <li>소단원</li>
          <li style={{ backgroundColor: '3B31FF' }}>
            01 사람을 사람답게 만드는 것은 무엇인가?
          </li>
          <li>02 도덕은 무엇이고 왜 필요한가?</li>
          <li>03 내가 도덕적이어야 하는 이유는 무엇일까?</li>
        </S.Ol>
      </S.OlContainer>
      <SearchBox />

      <S.Heading>
        나만의<S.Fit> fit</S.Fit>
      </S.Heading>
      <S.InputBox placeholder="수업 설계에 필요한 추가 요청사항이 있다면 여기에 작성해 주세요." />
      <Footer />
    </S.Root>
  )
}

export default Home
