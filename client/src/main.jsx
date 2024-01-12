import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define your custom theme
const theme = createTheme({
  // Customize your theme here
  palette: {
    primary: {
      main: "#291fe0",
    },
    secondary: {
      main: "#14b5f5",
    },
  },
});

// Wrap your App component with the ThemeProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
