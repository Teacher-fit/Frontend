import styled from 'styled-components'

export const Header = styled.header`
  padding-top: 66px;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0 20px 20px -10px rgba(32, 44, 153, 0.02);
  z-index: 10;
  text-align: left;
  margin-bottom: 50px;
`

export const DivContents = styled.div`
  width: 100%;
  height: 100%;
  display: flex; /* 이 부분 추가 필요할 수 있음 */
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    max-width: 1100px; /* 헤더의 최대 너비 */
    margin: 0 auto; /* 수평 중앙 정렬 */
  }
`;


export const DivLogoZone = styled.div`
  align-items: center;
  font-size: 13px;
  color: gray;
`

export const ImgLogo = styled.img`
  margin-right: 12px;
`
