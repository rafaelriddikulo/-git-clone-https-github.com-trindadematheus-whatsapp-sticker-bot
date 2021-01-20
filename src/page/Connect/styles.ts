import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;

  #menu {
    background: rgba(253, 209, 65, 0.04);
    height: 50px;
    width: 100%;
    padding: 0px 40px;
    margin-bottom: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      cursor: pointer;
      font-weight: bold;
      transition: 0.4s;

      :hover {
        transition: 0.4s;
        opacity: 0.6;
      }
    }

    > div {
      display: flex;
      align-items: center;
    }

    img {
      width: 40px;
    }

    h1 {
      color: #392408;
      font-weight: bold;
      font-size: 22px;
      margin-left: 10px;
    }
  }

  #qrcode {
    background: white;
    padding: 10px;

    img {
      width: 230px;
      height: 230px;
      border: 4px solid #392408;
      filter: grayscale(100);
    }
  }
`

export const InfoSec = styled.div`
  margin-top: 20px;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #392408;
    font-weight: bold;
  }


  p {
    margin-top: 20px;
    color: rgba(57, 36, 8, 0.8);
  }
`