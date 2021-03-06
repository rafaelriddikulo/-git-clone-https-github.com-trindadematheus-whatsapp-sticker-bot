import styled from 'styled-components'

export const Container  = styled.div`
  height: 100vh;
  width:  100%;
  background: white;

  display: flex;
`

export const Menu = styled.div`
  background: #FED245;
  height: 100vh;
  width: 230px;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  span {
    font-size: 14px;
    color: #392408;
  }

  h2 {
    font-size: 18px;
    color: #392408;
    margin-bottom: 10px;
  }
`

export const MenuItem = styled.div`
  margin: 15px 0px;
  color: rgba(57, 36, 6, 0.7);

  display: flex;

  span {
    margin-left: 4px;
  }
`

export const Body = styled.div`
  padding: 0 20px;

  display: flex;
  flex: 1;
`