import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminScreen from "./pages/AdminScreen/AdminScreen";
import BookingScreen from "./pages/BookingScreen/BookingScreen";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import ProfileScreen from "./pages/ProfileScreen/ProfileScreen";
import RegisterScreen from "./pages/RegisterScreen/RegisterScreen";
import { ezBlue, ezRed } from "./utils/colors";
import "./utils/hideScrollbar.css";
import { ezShadow1_low } from "./utils/shadows";

var theme = createTheme({
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
      fontSize: "36.62px",
      fontWeight: "bolder",
      letterSpacing: 1,
      marginTop: 0,
    },
    h2: {
      fontSize: "29.3px",
      fontWeight: "bold",
      letterSpacing: 1,
    },
    h3: {
      fontSize: "23.44px",
      fontWeight: "bold",
      letterSpacing: "0.15px",
    },
    h4: {
      fontSize: "18.75px",
      fontWeight: "600",
      letterSpacing: "0.15px",
    },
    h5: {
      fontSize: "15px",
      fontWeight: "600",
      letterSpacing: "0.15px",
    },
    h6: {
      fontSize: "12px",
      fontWeight: "600",
      letterSpacing: "0.15px",
    },
    small: {
      fontSize: "12px",
      fontWeight: "500",
    },
  },
  palette: {
    primary: {
      main: ezBlue,
    },
    error: {
      main: ezRed,
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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: "Open Sans",
          borderRadius: "10px",
          "&:hover": {
            borderStyle: "hidden",
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          boxShadow: ezShadow1_low,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="user" element={<ProfileScreen />} />
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
          <Route exact path="admin" element={<AdminScreen />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
