import styled, { keyframes } from "styled-components"

export default styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const blink = keyframes`
  0% {height: 100%; border-radius: 9px;}
  95% {height: 100%; border-radius: 9px;}
  100% { height: 2%; border-radius: 0px; }
`
export const Face = styled.div`
  width: 120px;
  height: 37px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.7);
  --color: white;
  filter: drop-shadow(0 0 2px var(--color));
  &::before,
  &::after,
  div {
    background-color: var(--color);
  }
  &::before,
  &::after {
    content: "";
    display: block;
    height: 100%;
    width: 18px;
    border-radius: 9px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    animation: ${blink} 2.5s infinite alternate;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`
export const Mounth = styled.div`
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`
