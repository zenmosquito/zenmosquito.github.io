import { PaletteColor, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const tools = createTheme();
// offwhite
const primary = tools.palette.augmentColor({ color: { main: "#eee8dc" } });
// green
const secondary = tools.palette.augmentColor({ color: { main: "#7e9745" } });
// orange
const highlight = tools.palette.augmentColor({ color: { main: "#b66d23" } });
// brown
const bodytext = tools.palette.augmentColor({ color: { main: "#5f2718" } });

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary,
    secondary,
    highlight,
    bodytext,
    error: {
      main: red.A400,
    },
    background: {
      default: secondary.light,
    },
  },
  typography: {
    fontFamily: "Lucida Console, Courier New, monospace",
    fontSize: 23,
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: primary.main,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: primary.main,
        },
      },
    },
  },
});

export default theme;

declare module "@mui/material/styles" {
  interface Palette {
    highlight: PaletteColor;
    bodytext: PaletteColor;
  }
  interface PaletteOptions {
    highlight: PaletteColor;
    bodytext: PaletteColor;
  }
}
