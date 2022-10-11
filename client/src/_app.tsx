import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { MyContextProvider } from "./context"
import { GlobalStyles, Themes } from "./styles"
import { Home } from "./pages"

createRoot(document.querySelector("#_app") as HTMLDivElement).render(
  <MyContextProvider>
    <ThemeProvider theme={Themes.LIGHT_THEME}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={null} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </MyContextProvider>
)
