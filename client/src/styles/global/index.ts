import { createGlobalStyle } from "styled-components"
import { PalleteData } from "../themes"

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }

  body,
  #root {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme }: { theme: PalleteData }) => `
    --background: ${theme.background.main};
    --on-background: ${theme.background.on};
    --primary: ${theme.primary.main};
    --on-primary: ${theme.primary.on};
    --primary-on-light: ${theme.primary.light};
    --primary-on-dark: ${theme.primary.dark};
    --secondary: ${theme.secondary.main};
    --on-secondary: ${theme.secondary.on};
    --secondary-on-light: ${theme.secondary.light};
    --secondary-on-dark: ${theme.secondary.dark};
    `}
    background-color: hsla(0, 100%, 50%, 1);
    background-image: radial-gradient(
      at 40% 20%,
      hsla(28, 100%, 74%, 1) 0px,
      transparent 50%
      ),
      radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
      radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
      radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
      radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
      radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
      radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);
  }
`
