import styled from 'styled-components'

export const Root = styled.div`
  background-color: white;
  min-height: 100vh;  /* Viewport Height, 화면 전체 높이 */
  display: flex;
  flex-direction: column;  /* Column으로 쌓이도록 설정 */
`

export const Menu = styled.div`
  /* layout */
  display: inline-flex;
  padding: 6px;
  align-items: flex-start;
  text-align: center;
  gap: 6px;
  margin: 0; 
  margin-bottom: 100px;
  margin-top: 50px;
  width: 227px;
  font-size: 16px;

  /* Style */
  border-radius: 8px;
  border: var(--sds-size-stroke-border) solid #D3D5FF;
  opacity: var(--sds-size-stroke-border);
  background: #F7F7FF;
`;

export const MenuCategory = styled.button`
  background-color: #D3D5FF;
  font-size: 15px;
  color: #666;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  white-space: nowrap;
  font-weight: bold;
  transition: transform 0.3s linear;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:hover {
    background-color: #ffffff;
    color: #000000 ;
    border: 0;
  }

  &.active {
    background-color:#ffffff;
    color: #000000;
    border: none;
    outline: none;
  }

  &.focus{
    outline: none;
    border: none;
  }
`;


export const SchoolMenu = styled.div`
  display: flex;
  margin-left: 0px;
  text-align: left;
  margin-bottom: 30px;
`;

export const SchoolCategory = styled.button`
  background-color: #ffffff;
  font-size: 20px;
  color: #666;
  border: none;
  border-radius: 40px;
  padding: 12px 18px;
  white-space: nowrap;
  font-weight: bold;
  margin-right: 17px;
  transition: transform 0.5s linear;

  &:hover {
    background-color: #4049f4;
    color: #ffffff ;
    border: 0;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  }

  &.active {
    background-color: #4049f4;
    color: #ffffff;
    border: none;
    outline: none;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  }

  &.focus{
    outline: none;
    border: none;
  }
`;

export const SearchBox = styled.div`
  background-color: #fafafa;
  padding: 43px;
  
  border-color: #000000;
  border-style: solid;
  border-width: 1px 0px 0px 0px;;
  margin-bottom: 89px;
`;

export const FilterMenu = styled.div`
  display: flex;
  margin-bottom: 19px;
`;

export const Label = styled.p`
  margin-right: 44px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 20px;
  color: #000000;
`;

export const FilterCategory = styled.button`
  background-color: #ffffff;    
  border-radius: 40px;
  padding: 6px 40px;
  margin-right: 15px;
  font-size: 20px;
  border: solid #D9D9D9;
  color: #666666;
  transition: transform 0.5s linear;

  &:hover, &:active {
    font-weight: bold;
    color: #ffffff;
    border: solid #6E75F5;
    background-color: #6E75F5; /* background-color가 변경되도록 수정 */
  }
`;

export const Heading = styled.h1`
  font-size: 24px;
  color: black; /* 텍스트가 명확하게 보이는 색상 */
  margin: 0;
  padding: 0;
  text-align: left;
`;

export const Fit = styled.span`
  color: #4049F4; /* 파란색으로 강조 */
  font-weight: bold; /* 강조된 텍스트 */
`;

export const OlContainer = styled.div`
  display: flex;
`;

export const Ol = styled.ol`
  list-style-type: none;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 130px;
  border-radius: 8px;
  background-color: #F7F7FF;
  border: solid #D3D5FF;
  margin-top: 23px;
  padding: 16px;
  font-size: 18px;

  &::placeholder {
    position: relative;
    top: -50px;  /* placeholder 텍스트를 위로 이동 */
    line-height: 1.2; /* 줄 간격 조절 */
    color: #B3B3B3;
  }
`;