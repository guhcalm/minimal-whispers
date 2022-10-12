import { createGlobalStyle } from "styled-components"
import { PalleteData } from "."

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
  background-color: #FAACA8;
  background-image: linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%);
`
