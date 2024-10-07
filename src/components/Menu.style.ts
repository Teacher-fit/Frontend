import styled from 'styled-components'

export const Menu = styled.div`
  display: flex;
  padding: 6px;
  align-items: flex-start;
  gap: 6px;
  margin-bottom: 100px;
  margin-top: 50px;
  width: 35%;
  max-width: 1100px; /* 메뉴의 최대 너비 */
  font-size: 16px;
  text-align: center;

  border-radius: 8px;
  border: var(--sds-size-stroke-border) solid #D3D5FF;
  opacity: var(--sds-size-stroke-border);
  background: #F7F7FF;
`;


export const MenuCategory = styled.button<{ isActive: boolean }>`
  flex-grow: 1; /* 각 버튼이 동일한 너비를 가짐 */
  background-color: ${({ isActive }) => (isActive ? '#D3D5FF' : '#ffffff')}; !important
  font-size: 15px;
  color: ${({ isActive }) => (isActive ? '#000000' : '#000000')};
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
    color: #000000;
    border: 0;
    outline: none;
  }

  &:focus {
    outline: none; 
    border: none;   
  }
`;

export const Fit = styled.span`
  color: #4049F4; /* 파란색으로 강조 */
  font-weight: bold; 
`;