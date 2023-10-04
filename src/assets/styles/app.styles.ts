import styled, { keyframes } from 'styled-components';

export const SApp = styled.div`
  text-align: center;
  background-color: #282c34;
`

export const SHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: inline-block;
  color: white;
  padding: 10px;
  border: solid 2px #a453f0;
  border-radius: 10px;
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const SLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} infinite 20s linear;
  }
`

export const SLink = styled.a`
  color: #61dafb;
`
