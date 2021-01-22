import styled from 'styled-components'

export const Body = styled.div`
  background: #FED245;
  width: 100%;
  height: 100vh;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #qrcode {
    background: white;
    width: 250px;
    height: 250px;
    margin-bottom: 40px;
  }

  h1 {
    font-size: 24px;
    color: #392408;
    margin-bottom: 20px;
  }

  p {
    font-weight: 18px;
    color: rgba(57, 36, 8, 0.80)
  }
`