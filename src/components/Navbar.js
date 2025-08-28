import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const logoUrl = "https://creativelandscapes.net.au/wp-content/uploads/2017/11/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/", icon: <HomeIcon /> },
    { label: "About Us", path: "/about", icon: <InfoIcon /> },
    { label: "Services", path: "/services", icon: <BuildIcon /> },
    { label: "Gallery", path: "/gallery", icon: <PhotoLibraryIcon /> },
    { label: "Contact Us", path: "/contact", icon: <ContactMailIcon /> },
  ];

  const handleNav = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="static" color="success">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <Box
              component="img"
              src={logoUrl}
              alt="Logo"
              sx={{ height: 40, width: "auto" }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontFamily: "Times New Roman, serif",
              }}
            >
              Creative Landscapes
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  onClick={() => navigate(item.path)}
                  startIcon={item.icon}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.label}
                onClick={() => handleNav(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
