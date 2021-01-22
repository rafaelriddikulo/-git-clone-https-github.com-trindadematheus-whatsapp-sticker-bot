import styled from 'styled-components'

export const Container = styled.div`
  background: transparent;
  padding: 10px 20px;
  position: fixed;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    font-weight: 700;
    font-size: 18px;
    color: #392408;
    transition: 0.4s;
    cursor: pointer;

    :hover {
      opacity: 0.6;
      transition: 0.4s;
    }
  }
`