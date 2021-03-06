import styled from 'styled-components'
import { Link } from 'gatsby'

const MoreButton = styled(Link)`
  color: #FFFFFF;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.45px;
  line-height: 48px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    height: 17.28px;
    width: 9.65px;
    margin: 0;
    margin-left: 10px;
  }

  &.opportunities {
    justify-content: flex-start;
  }

  @media (max-width: 600px) {
    &.opportunities {
      justify-content: center;
    }
  }
`

export default MoreButton
