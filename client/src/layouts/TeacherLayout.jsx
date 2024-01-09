import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/teacher/Navbar";

const TeacherLayout = () => {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default TeacherLayout;
