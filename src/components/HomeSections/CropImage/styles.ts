import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 40px;
  width: 100%;

  h2 {
    font-size: 18px;
    color: #392408;
  }

  h3 {
    font-weight: 400 !important;
    font-size: 14px;
    color: #392408;
    margin-bottom: 20px;
  }

  #row {
    margin-top: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input-range__track--active {
    background: #FED245 !important;
  }
`

export const Button = styled.button`
  background: #392408;
  height: 40px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  border: none;
  width: 270px;
  transition: 0.4s;

  :hover {
    opacity: 0.8;
    transition: 0.4s;
  }
`

export const Controls = styled.div`
  display: flex;
  align-items: center;

  span {
    background: #FED245;
    color: #7d6416;
    height: 40px;
    width: 90px;
    cursor: pointer;
    transition: 0.4s;

    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      opacity: 0.8;
      transition: 0.4s;
    }
  }

  span + span {
    margin-left: 10px;
  }
`