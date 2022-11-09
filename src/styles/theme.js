import { createTheme } from "@material-ui/core/styles";

// declare module "@material-ui/core/styles/createPalette" {
//   interface Palette {
//     surface: {
//       white: string;
//       semiWhite: string;
//       black: string;
//       lightGrey: string;
//     };
//   }
//   interface PaletteOptions {
//     surface?: {
//       white: string;
//       semiWhite: string;
//       black: string;
//       lightGrey: string;
//     };
//   }
// }

// declare module "@material-ui/core/styles/createTypography" {
//   interface TypographyOptions {
//     bodyXSmall: TypographyStyle;
//   }
//   interface TypographyOptions {
//     bodyXXSmall: TypographyStyle;
//   }
//   interface Typography {
//     bodyXSmall: TypographyOptions;
//   }
//   interface Typography {
//     bodyXXSmall: TypographyOptions;
//   }
// }

const theme = createTheme({
  palette: {
    primary: {
      main: "#3AD076",
    },
    secondary: {
      main: "#F85050",
    },
    surface: {
      white: "#FFFFFF",
      semiWhite: "#FAFAFA",
      black: "#393939",
      lightGrey: "#6A6A6A",
    },
    background: {
      default: "#2A2A2A",
    },
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: "48.83px",
    },
    h2: {
      fontSize: "39.06px",
    },
    h3: {
      fontSize: "31.25px",
    },
    h4: {
      fontSize: "25px",
    },
    h5: {
      fontSize: "22px",
    },
    h6: {
      fontSize: "18px",
    },
    body1: {
      fontSize: "16px",
    },
    bodyXSmall: {
      fontSize: "13px",
    },
    bodyXXSmall: {
      fontSize: "10px",
    },
  },
});

export default theme;
