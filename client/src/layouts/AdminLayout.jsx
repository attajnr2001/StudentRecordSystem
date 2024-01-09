import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/admin/Navbar";

const AdminLayout = () => {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default AdminLayout;
