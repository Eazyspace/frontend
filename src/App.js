import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginScreen from "./screens/LoginScreen";
import { ezBlue } from "./utils/colors";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import BookingScreen from "./screens/BookingScreen";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  palette: {
    primary: {
      main: ezBlue,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: "Open Sans",
          borderRadius: 10,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          {/* <Route path="/" element={<Header />}> */}
          <Route path="/" element={<HomeScreen />} />
          <Route
            exact
            path="booking"
            element={<BookingScreen success={false} />}
          />
          <Route
            exact
            path="booking/success"
            element={<BookingScreen success={true} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
