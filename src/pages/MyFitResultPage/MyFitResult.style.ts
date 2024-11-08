import styled from 'styled-components';

export const Root = styled.div`
  min-height: 60vh; /* Viewport Height, 화면 전체 높이 */
  display: flex;
  flex-direction: column; /* Column으로 쌓이도록 설정 */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 900px;
  max-width: 1100px;
  margin: 0 auto;
  overflow-x: hidden;

  // layout
  @media screen and (max-width: 768px) {
    //모바일 환경
    margin-left: 20px;
    margin-right: 20px;
  }
  @media screen and (min-width: 768px) {
    //pc 환경
    margin-left: 220px;
    margin-right: 220px;
  }
`

export const AnswerBox = styled.div`
  width: 100%;
  height: auto;
  min-height: 130px;
  border-radius: 16px;
  background-color: #f7f7ff;
  border: solid #d3d5ff;
  padding: 30px;
  padding-left: 40px;
  padding-right: 40px;
  font-size: 18px;
  resize: none;
  overflow: hidden;
  border: #d3d5ff 1px solid;
  text-align: left;
`

export const AnswerInfo = styled.div`
  color: #666f8d;
  display: flex;
  font-size: 12px;
  gap: 10px;
  margin-top: 10px;
`

export const MarkdownWrapper = styled.div`
  margin-top: 30px;
  min-height: 100px;
  margin-bottom: 20px;

  /* Heading 태그 앞에 마진 추가 */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1em; /* 각 단락이 Heading으로 구분될 수 있도록 */
  }

  /* table의 데이터 가운데 정렬 */
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: center; /* 테이블 안의 데이터 가운데 정렬 */
    margin-top: 0.4em;
  }

  th,
  td {
    border: 0.3px solid lightgray;
    padding: 8px;
  }

  /* 첫 번째 열 전체의 배경색 변경 */
  thead {
    background-color: #eaeaf8;
  }

  /* H2 태그의 크기를 H3 크기로 줄임 */
  h2 {
    font-size: 1.17em;
    margin-bottom: 0.1em;
  }

  li {
    margin-left: 20px;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px;
  margin-top: 30px;
  margin-left: 8px;
`
export const Icon = styled.img`
  transition: transform 0.1s ease; 
  scale: 1.05
  &:hover {
    transform: scale(1.2); 
  }
`

export const SubmitBtn = styled.button`
  margin-top: 20px;
  width: 170px;
  background-color: #4049f4;
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
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  width: 100%;
  height: 100%;
  margin-top: 58px;
`

export const Button = styled.button`
  all: unset;
`

export const VideoWrapper = styled.div`
  width: 70%;
  max-width: 800px;
  margin: 10px auto; /* 수평 중앙 정렬 */
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`
