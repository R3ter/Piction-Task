const defaultTheme = {
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderRadius: "20px",
          paddingTop: 15,
          width: "172px",
          paddingBottom: 15,
          borderColor: "#0075FF",
          ":hover": {},
          textTransform: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          border: "none",
          borderRadius: "20px",
          borderColor: "#0075FF",
          borderWidth: "1px",
          padding: 10,
          borderStyle: "solid",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#484848",
    },
    piction: {
      background: "#eaeaea",
      text: "#6c6c72",
      white: "#fff",
    },
    grayTones: {
      main: "#636363",
      light: "#eeeeee",
      lighter: "#f5f5f5",
      ultralight: "#fafafa",
    },
  },
  spacing: 8,
};
export default defaultTheme;
