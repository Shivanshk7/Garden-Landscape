import React from "react";
import { Box, Typography, Button, keyframes } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom"; // 🔹 Added for navigation

const logoUrl = "https://creativelandscapes.net.au/wp-content/uploads/2017/11/logo.png";
const bannerImages = [
  "https://creativelandscapes.net.au/wp-content/uploads/2017/11/small002.png",
  "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med003.png",
  "https://creativelandscapes.net.au/wp-content/uploads/2017/11/small003.png",
  "https://creativelandscapes.net.au/wp-content/uploads/2017/11/small005.png",
  "https://creativelandscapes.net.au/wp-content/uploads/2017/11/small006.png",
];

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroSection = () => {
  const navigate = useNavigate(); // 🔹 Initialize navigate

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url("https://creativelandscapes.net.au/wp-content/uploads/2017/11/small002.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 2,
        py: 6,
      }}
    >
      {/* Logo and Title */}
      <Box sx={{ textAlign: "center", mb: 4, animation: `${fadeIn} 1s ease-out` }}>
        <img
          src={logoUrl}
          alt="Creative Landscapes Logo"
          style={{ height: 80, marginBottom: "1rem" }}
        />
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", fontFamily: "Times New Roman, serif" }}
        >
          Creative Landscapes
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 1,
            fontFamily: "Times New Roman, serif",
            color: "rgba(0,255,0,0.7)",
            animation: `${fadeIn} 2s ease-in-out`,
          }}
        >
          A tradition of excellence in landscape design, construction and garden maintenance.
        </Typography>
      </Box>

      {/* CTA Button */}
      <Button
        variant="contained"
        size="large"
        onClick={() => navigate("/services")} // 🔹 Added navigation
        sx={{
          background: "linear-gradient(135deg, #43a047, #66bb6a)",
          px: 4,
          py: 1.5,
          mb: 5,
          fontWeight: "bold",
          borderRadius: "2rem",
          animation: `${fadeIn} 2.5s ease-in-out`,
          '&:hover': {
            background: "linear-gradient(135deg, #2e7d32, #43a047)",
          },
        }}
      >
        Explore Our Services
      </Button>

      {/* Banner Images */}
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          width: "100%",
          maxWidth: "1200px",
          px: 1,
          animation: `${fadeIn} 3s ease-in-out`,
        }}
      >
        {bannerImages.map((url, idx) => (
          <Box
            key={idx}
            component="img"
            src={url}
            alt={`banner-${idx}`}
            sx={{
              height: { xs: 160, sm: 220 },
              borderRadius: 2,
              flexShrink: 0,
              boxShadow: 4,
              transition: "transform 0.3s ease",
              '&:hover': {
                transform: "scale(1.05)",
              },
            }}
          />
        ))}
      </Box>

      {/* Scroll Down Icon */}
      <Box
        sx={{ mt: 4, animation: `${fadeIn} 3.5s ease-in-out` }}
        onClick={() => navigate("/gallery")} // 🔹 Navigate to Gallery on click
      >
        <ExpandMoreIcon sx={{ fontSize: 40, color: "#66bb6a", cursor: "pointer" }} />
      </Box>
    </Box>
  );
};

export default HeroSection;
