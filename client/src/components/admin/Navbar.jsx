import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
  styled,
  Button,
  Box,
  Avatar,
  Badge,
  Divider,
  IconButton,
} from "@mui/material";
import {
  AutoStoriesOutlined,
  Notifications,
  KeyboardArrowDown,
  GridView,
  AutoGraphOutlined,
} from "@mui/icons-material";
import { NavLink, Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  gap: "30px",
});

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
}));

const Navbar = () => {
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const handleUserMenuClick = () => {
    setOpenUserMenu(!openUserMenu);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#fff" }} elevation={0}>
      <StyledToolbar variant="dense">
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" } }}
          className="nav__logo"
        >
          <Link to={""}>SRMS</Link>
        </Typography>
        <AutoStoriesOutlined sx={{ display: { xs: "block", sm: "none" } }} />

        <UserBox>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography sx={{ display: { xs: "none", sm: "block" } }}>
              <NavLink to="">Dashboard</NavLink>
            </Typography>
            <Typography sx={{ display: { xs: "block", sm: "none" } }}>
              <NavLink to="">
                <GridView />
              </NavLink>
            </Typography>

            {/* Add menu */}
            <Button
              sx={{ display: { xs: "none", sm: "block" } }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Menu
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link to={"addTeacher"}>Add Teacher</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to={"addStudent"}>Add Student</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to={"addStudent"}>See Stats</Link>
              </MenuItem>
            </Menu>

            <Typography
              sx={{ display: { xs: "block", sm: "none" } }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <AutoGraphOutlined />
            </Typography>

            {/* Add menu */}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            {/* Notifications */}
            <Badge
              color="error"
              variant="dot"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <NavLink to="messages">
                <Notifications />
              </NavLink>
            </Badge>
            <Divider orientation="vertical" flexItem />

            {/* User profile */}
            <Avatar
              sx={{ width: 25, height: 25 }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Typography
              variant="h6"
              sx={{ fontSize: "smaller", display: { xs: "none", sm: "block" } }}
              onClick={handleUserMenuClick}
            >
              John
            </Typography>
            <KeyboardArrowDown onClick={handleUserMenuClick} />

            {/* User menu */}
            <Menu
              id="user-menu"
              open={openUserMenu}
              onClose={() => setOpenUserMenu(false)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem>
                <Link to={"profile"}>Profile</Link>
              </MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>

            {/* User menu */}
          </Box>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
