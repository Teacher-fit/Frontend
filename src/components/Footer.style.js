import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.div`

`;

export const FooterMenu = styled.button`
`;

const StyledLink = styled(Link)`
  color: #424242;

  &:hover {
    color: ${({ theme }) => theme.ewhaGreen};
    font-weight: 900;
  }
`

export const NavMenu = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding-left: 40px;
  }

  li {
    padding: 10px 50px;
    font-weight: bold;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.black};

      &:hover {
        color: ${({ theme }) => theme.ewhaGreen};
        font-weight: 900;
      }
    }
  }
`
