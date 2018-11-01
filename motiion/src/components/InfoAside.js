import React from 'react'
import styled from 'styled-components'
import { imgIllustration } from '../images'

const InfoAside = ({ children, width }) => {
  return (
    <div style={{ width: width }}>
      <Main>
        {children}
      </Main>
      <SideBg>
        <img src={imgIllustration} alt="image illustration" />
      </SideBg>
    </div>
  )
}

export default InfoAside

const Main = styled.div`
  text-align: right;
  padding: 70px 32px;
  width: 320px;
  height: 660px;
  background: #000;
  color: #FFFFFF;
  letter-spacing: 0.84px;
  line-height: 60px;
  text-align: right;

  @media (max-width: 600px) {
    width: 100%;
    height: 480px;
    padding: 70px 30px;
    text-align: center;
  }

  @media (max-width: 450px) {
    padding: 70px 10px;
  }
`

const SideBg = styled.div`
  position: absolute;
  top: 500px;
  left: -10px;
  width: 330px;
  height: 200px;
  
  & img {
    width: 100%;
  }

  @media (max-width: 600px) {
    top: 220px;
    width: 100%;
    padding: 10px;
    background: transparent;
    left: 0;

    & img {
      width: 100%;
    }
  }  
  
  @media (max-width: 600px) {
    padding: 0 25px;
    top: 250px;
  }

  @media (max-width: 500px) {
    padding: 0 20px;
    top: 250px;
  }

  @media (max-width: 450px) {
    padding: 10px;
    top: 280px;
  }
`
