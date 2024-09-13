import React, { useEffect } from 'react'
import * as S from './Home.style'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBox from '../components/SearchBox'

const Home = () => {
  useEffect(() => {
    document.title = 'TeacherFit'
  }, [])
  return (
    <S.Root>
      <Header />
      <S.Menu>
        <S.MenuCategory>HOME</S.MenuCategory>
        <S.MenuCategory style={{ backgroundColor: 'white' }}>
          나만의 <S.Fit>Fit</S.Fit> 찾기
        </S.MenuCategory>
        {/* backgroundColor & onclick 로직 구현 */}
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
          <S.Li
            style={{
              //backgroundColor: '#F7F7FF',
              fontSize: '20px',
              color: '#4049F4',
              fontWeight: 'bold',
            }}
          >
            대단원
          </S.Li>
          <S.Li>I. 자신과의 관계</S.Li>
          <S.Li>II. 타인과의 관계</S.Li>
          <S.Li>III. 사회·공동체와의 관계</S.Li>
          <S.Li>IV. 자연과의 관계</S.Li>
        </S.Ol>
        <S.Ol>
          <S.Li
            style={{
              //backgroundColor: '#F7F7FF',
              fontSize: '20px',
              color: '#4049F4',
              fontWeight: 'bold',
              width: '100%'
            }}
          >
            중단원
          </S.Li>
          <S.Li>1. 도덕적인 삶</S.Li>
          <S.Li>2. 도덕적 행동</S.Li>
          <S.Li>3. 자아 정체성</S.Li>
          <S.Li>4. 행복한 삶</S.Li>
          <S.Li>5. 행복한 삶</S.Li>
        </S.Ol>
        <S.Ol>
          <S.Li
            style={{
              //backgroundColor: '#F7F7FF',
              fontSize: '20px',
              color: '#4049F4',
              fontWeight: 'bold',
            }}
          >
            소단원
          </S.Li>
          <S.Li>01 사람을 사람답게 만드는 것은 무엇인가?</S.Li>
          <S.Li>02 도덕은 무엇이고 왜 필요한가?</S.Li>
          <S.Li>03 내가 도덕적이어야 하는 이유는 무엇일까?</S.Li>
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
