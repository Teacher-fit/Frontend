import { useState } from 'react'
import styled from 'styled-components'

const MyFit = () => {
  const [activeButton, setActiveButton] = useState<string>('home')

  // 버튼 클릭 시 active 상태 변경
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName)
  }

  return (
    <Root>
      <Menu>
        <MenuCategory
          isActive={activeButton === 'home'}
          onClick={() => handleButtonClick('home')}
        >
          HOME
        </MenuCategory>
        <MenuCategory
          isActive={activeButton === 'fit'}
          onClick={() => handleButtonClick('fit')}
        >
          나만의 <Fit>Fit</Fit> 찾기
        </MenuCategory>
      </Menu>
    </Root>
  )
}

export default MyFit

// styled-component
export const Root = styled.div`
  min-height: 60vh; /* Viewport Height, 화면 전체 높이 */
  display: flex;
  flex-direction: column; /* Column으로 쌓이도록 설정 */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 3000px;
`
export const Menu = styled.div`
  /* layout */
  display: flex; /* inline-flex를 flex로 변경 */
  padding: 6px;
  align-items: flex-start;
  text-align: center;
  gap: 6px;
  margin: 0;
  margin-bottom: 100px;
  margin-top: 50px;
  width: 30%;
  font-size: 16px;

  /* Style */
  border-radius: 8px;
  border: var(--sds-size-stroke-border) solid #d3d5ff;
  opacity: var(--sds-size-stroke-border);
  background: #f7f7ff;
`

export const MenuCategory = styled.button<{ isActive: boolean }>`
  flex-grow: 1; /* 각 버튼이 동일한 너비를 가짐 */
  background-color: ${({ isActive }) => (isActive ? '#D3D5FF' : '#ffffff')}; !important
  font-size: 15px;
  color: ${({ isActive }) => (isActive ? '#666' : '#000000')};
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  white-space: nowrap;
  font-weight: bold;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  appearance: none;
  transition: all 0.3s ease;
  width: auto;
  
  &:hover {
    background-color: #f0f0f0;
    color: #000000;
    border: 0;
    outline: none;
  }

  &:focus {
    outline: none; 
    border: none;   
  }
`

export const Fit = styled.span`
  color: #4049f4; /* 파란색으로 강조 */
  font-weight: bold;
`
