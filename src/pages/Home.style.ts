import styled from 'styled-components'

export const Root = styled.div`
  min-height: 100vh;  /* Viewport Height, 화면 전체 높이 */
  display: flex;
  flex-direction: column;  /* Column으로 쌓이도록 설정 */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 3000px;  
`

export const Menu = styled.div`
  /* layout */
  display: flex;  /* inline-flex를 flex로 변경 */
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
  border: var(--sds-size-stroke-border) solid #D3D5FF;
  opacity: var(--sds-size-stroke-border);
  background: #F7F7FF;
`;

/*
export const Fit = styled.span`
  color: #4049f4;
  font-weight: bold;
`;
*/

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
`;

export const SchoolMenu = styled.div`
  display: flex;
  margin-left: 0px;
  text-align: left;
  margin-bottom: 15px;
`;

export const SchoolCategory = styled.button<{ isActive1: boolean }>`
  font-size: 20px;
  color: ${({ isActive1 }) => (isActive1 ? '#ffffff' : '#666')}; 
  border: none;
  border-radius: 40px;
  padding: 12px 18px;
  white-space: nowrap;
  font-weight: bold;
  margin-right: 17px;
  transition: all 0.3s ease;

  &:hover {
    border: 0;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  }

  &:active {
    color: #ffffff;
    border: none;
    outline: none;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  }

  &:focus{
    outline: none;
    border: none;
  }
`;

export const SearchBox = styled.div`
  background-color: #fafafa;
  padding: 43px;
  
  border-color: grey;
  border-style: solid;
  border-width: 0.5px 0px 0px 0px;
  margin-bottom: 0px;
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

export const FilterCategory = styled.button<{ isActive2: boolean }>`
  border-radius: 40px;
  padding: 6px 40px;
  margin-right: 15px;
  font-size: 20px;
  border: solid #D9D9D9;
  color: ${({ isActive2 }) => (isActive2 ? '#ffffff' : '#666666')}; 
  transition: all 0.3s ease;

  &:hover, &:active {
    font-weight: bold;
    border: solid #D9D9D9;
  }
  
  &:focus {
    outline: none; 
    border: solid #D9D9D9;
  }
`;

export const Heading = styled.h1`
  font-size: 24px;
  color: black; 
  margin: 0;
  padding: 0;
  text-align: left;
  margin-bottom: 23px;
  margin-top: 89px;
`;

export const Fit = styled.span`
  color: #4049F4; /* 파란색으로 강조 */
  font-weight: bold; 
`;

export const OlContainer = styled.div`
  display: flex;
  margin-bottom: 0px;
  width: 100%;
  justify-content: space-between;
  border: 0.3px solid #D9D9D9;
`;

export const Ol = styled.ol`
  list-style-type: none;
  color: #666666;
`;

export const Li = styled.li`
  margin-top: 15px;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 130px;
  border-radius: 8px;
  background-color: #F7F7FF;
  border: solid #D3D5FF;
  padding: 16px;
  font-size: 18px;

  &::placeholder {
    position: relative;
    top: -50px;  /* placeholder 텍스트를 위로 이동 */
    line-height: 1.2; /* 줄 간격 조절 */
    color: #B3B3B3;
  }
`;

export const Detail = styled.p`
  background-color: white;
  border: none;
  margin-left: 45px;
  weight: 20%;
  text-align: left;
  margin-top: 0;
  font-size: 0.9rem;
  text-decoration: underline;
  color: #757575;
`;

export const SubmitBtn = styled.button`
  margin-top: 20px;
  width: 170px;
  background-color: #4049F4;
  color: white;
  font-weight: bold;
  font-size: 18px;
  text-align: center;

  &:focus {
    outline: none; 
    border: none;   
  }
`;

/* 부모 컨테이너에 flexbox 적용 */
export const BtnContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  width: 100%;
  height: 100%;
`;