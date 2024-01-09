import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Assuming your JSON server is running on http://localhost:3001
    const apiUrl = "http://localhost:3001/users";
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Check if the user with the provided email exists
    const user = users.find((user) => user.email === username);

    if (user && user.password === password) {
      // Successful login
      if (user.role === "teacher") {
        // Redirect to the teacher overview page
        navigate("/teacher");
      } else if (user.role === "admin") {
        // Redirect to the admin overview page
        navigate("/admin");
      } else {
        // Handle other roles or scenarios
        console.log("Invalid role. Please contact support.");
      }
    } else {
      // Invalid credentials
      console.log("Invalid credentials. Please try again.");
    }
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
              backgroundColor: "#4CAF50",
              color: "#fff",
              mt: 2,
              "&:hover": {
                backgroundColor: "#45a049",
              },
            }}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
