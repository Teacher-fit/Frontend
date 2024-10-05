import { useState} from 'react'
import styled from 'styled-components'
import { TextbookData } from '../mock/TextbookData'

interface Unit {
  id: number
  title: string
  chapters: Chapter[]
}

interface Chapter {
  id: number
  title: string
  sections: Section[]
}

interface Section {
  id: number
  title: string
}

interface TextbookTableProps {
  onCompletionStatusChange: (complete: boolean, selectedIds: number[]) => void
}

const TextbookTable: React.FC<TextbookTableProps> = ({
  onCompletionStatusChange,
}) => {
  const [selectedUnitId, setSelectedUnitId] = useState<number | null>(null)
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(
    null
  )
  const [selectedSectionId, setSelectedSectionId] = useState<number | null>(
    null
  )

  const handleSelection = (
    unitId: number | null,
    chapterId: number | null,
    sectionId: number | null
  ) => {
    const selectedIds = [unitId, chapterId, sectionId].filter(
      (id) => id !== null
    ) as number[]
    const isComplete = selectedIds.length === 3 // All 3 IDs selected means complete

    // Send data to parent component (Home.tsx)
    onCompletionStatusChange(isComplete, selectedIds)
  }

  return (
    <div>
      <TableContainer>
        {/* 대단원 */}
        <Column>
          <StyledHeading>대단원</StyledHeading>
          <StyledUl>
            {TextbookData.map((unit, index) => (
              <StyledLi
                key={unit.id}
                onClick={() => {
                  setSelectedUnitId(index+1)
                  setSelectedChapterId(null) // Reset chapter and section when unit changes
                  setSelectedSectionId(null)
                }}
                isClicked={selectedUnitId === index}
              >
                {unit.title}
              </StyledLi>
            ))}
          </StyledUl>
        </Column>

        {/* 중단원 */}
        <Column>
          <StyledHeading>중단원</StyledHeading>
          {selectedUnitId !== null ? (
            <StyledUl>
              {TextbookData[selectedUnitId].chapters.map((chapter, index) => (
                <StyledLi
                  key={chapter.id}
                  onClick={() => {
                    setSelectedChapterId(index+1)
                    setSelectedSectionId(null) // Reset section when chapter changes
                  }}
                  isClicked={selectedChapterId === index}
                >
                  {chapter.title}
                </StyledLi>
              ))}
            </StyledUl>
          ) : (
            <p style={{ color: '#666666' }}>대단원을 선택해 주세요.</p>
          )}
        </Column>

        {/* 소단원 */}
        <Column>
          <StyledHeading>소단원</StyledHeading>
          {selectedChapterId !== null ? (
            <StyledUl>
              {TextbookData[selectedUnitId!].chapters[
                selectedChapterId
              ].sections.map((section, index) => (
                <StyledLi
                  key={section.id}
                  onClick={() => {
                    setSelectedSectionId(index+1)
                    handleSelection(selectedUnitId, selectedChapterId, index) // Pass the selected data
                  }}
                  isClicked={selectedSectionId === index}
                >
                  {section.title}
                </StyledLi>
              ))}
            </StyledUl>
          ) : (
            <p style={{ color: '#666666' }}>중단원을 선택해 주세요.</p>
          )}
        </Column>
      </TableContainer>
    </div>
  )
}

export default TextbookTable

/* Styled Components */
const StyledLi = styled.li<{ isClicked: boolean }>`
  padding-bottom: 10px;
  transition: all 0.3s ease;
  font-weight: ${({ isClicked }) => (isClicked ? 'bold' : 'normal')};
  color: ${({ isClicked }) => (isClicked ? '#4049F4' : '#666666')};

  // hover 스타일 적용
  &:hover {
    font-weight: bold;
    color: #4049f4;
  }
`

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
