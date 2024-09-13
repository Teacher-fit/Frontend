import styled from 'styled-components'

export const FooterContainer = styled.p`
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  margin-top: 187px;
`;

export const DivContents = styled.div` 
  margin: 0px;  
  background-color: #ffffff;
  bottom: 0;
  left: 0;
  width: 100%;  
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }
`;


export const DivLogoZone = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 13px;
  color: gray;
`

export const ImgLogo = styled.img`
  margin-right: 0px;
  transform: scale(0.7);
`