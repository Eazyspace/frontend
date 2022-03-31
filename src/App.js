import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginScreen from "./screens/LoginScreen";
import { ezBlue } from "./utils/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  palette: {
    primary: {
      main: ezBlue,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginScreen />
    </ThemeProvider>
  );
}

export default App;
