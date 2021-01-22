import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
    font-weight: 400;
    overflow: hidden;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700 !important;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul {
    list-style: none;
  }
  
  .dotsLoading {
    width: 3.5em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }

  .dotsLoading div {
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background-color: #392408;
    animation: fade 0.8s ease-in-out alternate infinite;
  }

  .dotsLoading div:nth-of-type(1) {
    animation-delay: -0.4s;
  }

  .dotsLoading div:nth-of-type(2) {
    animation-delay: -0.2s;
  }

  @keyframes fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;