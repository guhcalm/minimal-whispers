interface ColorData {
  on: string
  main: string
  light?: string
  dark?: string
}

export type PalleteData = {
  background: ColorData
  primary: ColorData
  secondary: ColorData
}

enum ThemesEnum {
  DARK_THEME = "DARK_THEME",
  LIGHT_THEME = "LIGHT_THEME"
}

type ThemesDictionaryData = {
  [name in ThemesEnum]: PalleteData
}

export default {
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
} as ThemesDictionaryData
