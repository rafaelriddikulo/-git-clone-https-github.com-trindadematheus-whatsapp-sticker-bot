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

  img {
    margin-bottom: 40px;
  }

  span {
    color: rgba(57, 36, 6, 0.7);
    font-size: 16px;
    margin-bottom: 10px;
  }
`