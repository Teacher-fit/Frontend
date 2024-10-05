import styled from 'styled-components'

export const Root = styled.div`
  export const Root = styled.div
  min-height: 80vh; /* Viewport Height, 화면 전체 높이 */
  display: flex;
  flex-direction: column; /* Column으로 쌓이도록 설정 */
  margin: 0;
  padding: 0;
  max-width: 100%;
` 

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

export const Detail = styled.div` // or p
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
  border-radius: 8px;
  padding: 10px;

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
  margin-top: 58px;
`;