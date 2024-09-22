import { useState } from 'react'
import styled from 'styled-components'
import { TextbookData } from '../mock/TextbookData'

interface Chapter {
  id: number
  title: string
  sections: Section[]
}

interface Section {
  id: number
  title: string
}

interface Unit {
  id: number
  title: string
  chapters: Chapter[]
}

const TextbookTable = () => {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null)
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null)

  const handleUnitClick = (unit: Unit) => {
    setSelectedUnit(unit)
    setSelectedChapter(null) // 대단원을 선택할 때 중단원 초기화
  }

  const handleChapterClick = (chapter: Chapter) => {
    setSelectedChapter(chapter)
  }

  return (
    <div>
      <TableContainer>
        {/* 대단원 */}
        <Column>
          <StyledHeading>대단원</StyledHeading>
          <StyledUl>
            {TextbookData.map((unit) => (
              <li
                key={unit.id}
                onClick={() => handleUnitClick(unit)}
                style={{ paddingBottom: '10px' }}
              >
                {unit.title}
              </li>
            ))}
          </StyledUl>
        </Column>

        {/* 중단원 */}
        <Column>
          <StyledHeading>중단원</StyledHeading>
          {selectedUnit ? (
            <StyledUl>
              {selectedUnit.chapters.map((chapter) => (
                <li
                  key={chapter.id}
                  onClick={() => handleChapterClick(chapter)}
                  style={{ paddingBottom: '10px' }}
                >
                  {chapter.title}
                </li>
              ))}
            </StyledUl>
          ) : (
            <p></p>
          )}
        </Column>

        {/* 소단원 */}
        <Column>
          <StyledHeading>소단원</StyledHeading>
          {selectedChapter ? (
            <StyledUl>
              {selectedChapter.sections.map((section) => (
                <li key={section.id} style={{ paddingBottom: '10px' }}>{section.title}</li>
              ))}
            </StyledUl>
          ) : (
            <p></p>
          )}
        </Column>
      </TableContainer>
    </div>
  )
}

export default TextbookTable

/* Styled Components */
const StyledUl = styled.ul`
  list-style: none;
  text-align: left;
  word-wrap: break-word; /* 텍스트가 공간을 넘으면 줄바꿈 */
  padding-left: 15px;
  padding-right: 10px;
`

const TableContainer = styled.div`
  display: flex;
  gap: 0px;
  justify-content: space-between; /* 3개의 컬럼이 균등하게 배치됨 */
  width: 100%;
  height: 100%;
`

const Column = styled.div`
  flex: 1; /* 각 컬럼이 동일한 너비를 가짐 */
  width: 300px; 
  padding-left: 0px;
  padding-right: 0px;
  box-sizing: border-box;
  border: 0.3px solid #ddd;
  overflow-wrap: break-word; /* 텍스트 줄바꿈 설정 */
  word-break: break-word;
  height: auto;
  min-height: 200px; /* 필요시 최소 높이를 지정 */
`

const StyledHeading = styled.h2`
  font-size: 20px;
  color: #4049F4;
  margin-top: 0px;
  margin-bottom: 10px;
  background-color: #F7F7FF;
  border: #D3D5FF solid 1px 
  border-radius: 10px;
  padding: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
`
