type ColorData = {
  on: string
  main: string
  light?: string
  dark?: string
}

export type PalleteData = Record<"primary" | "secondary" | "background", ColorData>

export default <Record<"DARK_THEME" | "LIGHT_THEME", PalleteData>>{
  DARK_THEME: {
    background: { main: "black", on: "" },
    primary: { main: "", on: "", light: "", dark: "" },
    secondary: { main: "", on: "", light: "", dark: "" }
  },
  LIGHT_THEME: {
    background: { main: "white", on: "" },
    primary: { main: "", on: "", light: "", dark: "" },
    secondary: { main: "", on: "", light: "", dark: "" }
  }
}
