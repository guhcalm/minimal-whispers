import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Home } from "./pages"
import { GlobalStyles, Themes } from "./styles"

createRoot(document.querySelector("#root") as HTMLElement).render(
  <ThemeProvider theme={Themes.LIGHT_THEME}>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={null}></Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)
