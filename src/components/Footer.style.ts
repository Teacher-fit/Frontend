import styled from 'styled-components'

export const FooterContainer = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  margin-top: 187px;
  margin-bottom: 30px;
`;

export const DivContents = styled.div` 
  width: 100%;  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    max-width: 1100px; /* 푸터의 최대 너비 */
    margin: 0 auto; /* 수평 중앙 정렬 */
  }
`;



export const DivLogoZone = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 13px;
  gap: 10px;
`

export const ImgLogo = styled.img`
  margin-right: 0px;
  transform: scale(0.8);
`

export const Span = styled.span`
  font-size: 1.2em;
  margin-right: 40px;
  white-space: nowrap;
`;