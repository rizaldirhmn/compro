import {
  responsiveFontSizes,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#16A1E0",
    },
    secondary: {
      main: "#f4f4f4",
    },
    text: {
      default: "#fff",
      primary: "#212121",
      secondary: "#8D8D8D",
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif", "Montserrat", "sans-serif"].join(
        ","
      ),
    },
  },
  overrides: {
    MuiListItemText: {
      primary: {
        fontFamily: "Poppins",
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
