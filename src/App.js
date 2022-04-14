
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeScreen from "./screens/HomeScreen";
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
      <HomeScreen/>
    </ThemeProvider>
  );
}

export default App;
