import styled from 'styled-components'

export const Header = styled.header`
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;  
  padding-top: 66px;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  z-index: 10;
  text-align: left;
  margin-bottom: 50px;
`

export const DivContents = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  @media screen and (min-width: 768px) {
    max-width: 1100px;
    margin: 0 auto;
  }
`

export const DivLogoZone = styled.div`
  align-items: center;
  font-size: 13px;
  color: gray;
`

export const ImgLogo = styled.img`
  margin-right: 12px;
`
