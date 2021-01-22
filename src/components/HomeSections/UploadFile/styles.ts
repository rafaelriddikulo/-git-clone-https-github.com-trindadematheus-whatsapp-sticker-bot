import styled from 'styled-components'

const getColor = (props: any) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isDragActive) {
    return '#2196f3';
  }
  return 'rgba(254, 210, 69, 0.5)';
}

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  #dropzone {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${props => getColor(props)};
    border-style: dashed;
    background-color: rgba(254, 210, 69, 0.04);
    outline: none;
    transition: border .24s ease-in-out;
    cursor: pointer;
    transition: 0.4s;

    :hover {
      background: rgba(254, 210, 69, 0.2);
      transition: 0.4s;
    }

    h1 {
      color: #392408;
      font-size: 18px;
      text-align: center;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    p {
      font-size: 12px;
      color: #999;
    }
  }
`