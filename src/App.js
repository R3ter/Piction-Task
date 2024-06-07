import "./App.css";
import { createTheme, ScopedCssBaseline, ThemeProvider } from "@mui/material";
import CustomRoutes from "./CustomRoutes";
import { store } from "./Redux/slicer";
import { Provider } from "react-redux";
import defaultTheme from "./themes/defaultTheme";

const theme = createTheme(defaultTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ScopedCssBaseline>
          <CustomRoutes />
        </ScopedCssBaseline>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
