import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  margin-top: 187px;
  padding-bottom: 30px;
  overflow-x: hidden; /* 가로 스크롤 방지 */
`;

export const DivContents = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  box-sizing: border-box; /* padding과 함께 요소의 전체 너비를 고려 */

  @media screen and (min-width: 768px) {
    max-width: 1100px; /* 푸터의 최대 너비 */
    margin: 0 auto; /* 수평 중앙 정렬 */
  }
`;

export const DivLogoZone = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 0.9em;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap; /* 모바일에서 콘텐츠가 줄바꿈 되도록 설정 */
    justify-content: center; /* 가운데 정렬 */
    scale: 0.8;
  }

  @media screen and (min-width: 769px) {
    flex-wrap: nowrap; /* PC 환경에서 줄바꿈되지 않도록 설정 */
  }
`;

export const ImgLogo = styled.img`
  margin-right: 0px;
  transform: scale(0.8);
`;
