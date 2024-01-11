import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.scss";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const apiUrl = "http://localhost:3001/users";
    const response = await fetch(apiUrl);
    const users = await response.json();

    const user = users.find((user) => user.email === username);

    if (user && user.password === password) {
      if (user.role === "teacher") {
        navigate("/teacher");
      } else if (user.role === "admin") {
        navigate("/admin");
      } else {
        showAlert("Invalid role. Please contact support.");
      }
    } else {
      showAlert("Invalid credentials. Please try again.");
    }
  };

  const showAlert = (message) => {
    setAlertMessage(message);
    setOpenAlert(true);
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f2f2f2",
      }}
    >
      <Paper
        sx={{
          width: 300,
          padding: 3,
          borderRadius: 1,
          backgroundColor: "#f2f2f2e3",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h6" align="center" mb={2}>
          SRMS - LOGIN
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            type="email"
            name="username"
            label="Username"
            variant="outlined"
            margin="normal"
            size="small"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            fullWidth
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            margin="normal"
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#2610c9",
              color: "#fff",
              mt: 2,
              "&:hover": {
                backgroundColor: "#0f1e6a",
              },
            }}
          >
            Sign In
          </Button>
        </form>

        {/* Snackbar for alerts */}
        <Snackbar
          open={openAlert}
          autoHideDuration={3000}
          onClose={handleAlertClose}
        >
          <Alert
            className="info"
            onClose={handleAlertClose}
            severity="warning"
            elevation={6}
            variant="filled"
          >
            {alertMessage}
          </Alert>
        </Snackbar>
      </Paper>
    </Box>
  );
};

export default Login;
