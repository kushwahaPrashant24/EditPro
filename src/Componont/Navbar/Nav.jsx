import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Nav.css";

const menuConfig = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services", content: "Services Content" },
  { name: "Industries", path: "/Industries" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [sticky, setSticky] = useState(false);
  const [hoverBoxContent, setHoverBoxContent] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMouseEnter = (content) => {
    setHoverBoxContent(content);
  };

  const handleMouseLeave = () => {
    setHoverBoxContent(null);
  };

  return (
    <>
      <div id="full-scr">
        <div className="full-div1"></div>
      </div>
      <AppBar
        position="sticky"
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "flex" },
          justifyContent: "space-around",
          backgroundColor: sticky ? "rgb(45, 15, 94)" : "transparent",
          transition: "background-color 0.3s",
          borderRadius: "50px",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-around",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={Logo} style={{ height: "60px", width: "60px" }} />
            </Typography>

            <Box
              sx={{
                flexGrow: 10,
                display: { xs: "flex", sm: "none", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {menuConfig.map((menu) => (
                  <MenuItem key={menu.name} onClick={handleCloseNavMenu}>
                    <Button
                      key={menu.name}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "black", display: "block" }}
                      component={Link}
                      to={menu.path}
                    >
                      {menu.name}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={Logo} style={{ height: "60px", width: "60px" }} />
            </Typography>
            <Box
              sx={{
                flexGrow: 10,
                display: { xs: "none", sm: "flex", md: "flex" },
                justifyContent: "space-around",
              }}
            >
              {menuConfig.map((menu) => (
                <div
                  key={menu.name}
                  onMouseEnter={() => handleMouseEnter(menu.content)}
                  onMouseLeave={handleMouseLeave}
                  style={{ position: "relative" }}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white" }}
                    component={Link}
                    to={menu.path}
                  >
                    {menu.name}
                  </Button>
                  {menu.content && (
                    <Box
                      className={`hover-box ${hoverBoxContent === menu.content ? "visible" : ""}`}
                    >
                      <Typography variant="h6" color="primary" sx={{ padding: 2 }}>
                        {menu.content}
                      </Typography>
                      {/* You can add more custom content here */}
                      <div>
                        <p>Custom content for {menu.name}</p>
                      </div>
                    </Box>
                  )}
                </div>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default ResponsiveAppBar;