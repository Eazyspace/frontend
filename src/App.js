import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { ezBlue } from "./utils/colors";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen";
import BookingScreen from "./screens/BookingScreen";
import { ezShadow1_low } from "./utils/shadows";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "Montserrat",
      "sans-serif",
      "Open Sans",
    ].join(", "),
    htmlFontSize: 15,
    body1: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: "400",
      lineHeight: "24px",
    },
    p: {
      marginBottom: "1rem",
    },
    allVariants: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: "700",
      lineHeight: "1.3",
    },
    h1: {
      marginTop: 0,
      fontSize: "3.052rem",
    },
    h2: {
      fontSize: "2.441rem",
      fontWeight: "bold",
      letterSpacing: 1,
    },
    h3: {
      fontSize: "1.953rem",
      fontWeight: "bold",
      letterSpacing: 1,
    },
    h4: {
      fontSize: "1.563rem",
      fontWeight: "600",
      letterSpacing: "0.15px",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: "600",
      letterSpacing: "0.15px",
    },
    small: {
      fontSize: "0.8rem",
      fontWeight: "500",
    },
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
          fontFamily: "Open Sans",
          fontWeight: "bold",
          padding: "10px 0px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: "Open Sans",
          borderRadius: "20px",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: "1.25rem",
          fontWeight: "600",
          letterSpacing: "0.15px",
          boxShadow: ezShadow1_low,
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
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
