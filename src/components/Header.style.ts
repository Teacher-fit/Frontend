import styled from 'styled-components'

export const Header = styled.header`
  padding-top: 66px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0 20px 20px -10px rgba(32, 44, 153, 0.02);
  z-index: 10;
  text-align: left;
`

export const DivContents = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

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
