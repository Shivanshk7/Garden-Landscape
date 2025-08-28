import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const backgroundImage = "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med018.png";

const highlight = (text, words) => {
  const pattern = new RegExp(`(${words.join("|")})`, "gi");
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    words.some(word => word.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} style={{ color: "#FFD700", fontWeight: 600 }}>{part}</span>
    ) : (
      part
    )
  );
};

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const paragraphs = [
    `We are honored to provide our professional environmental planning and garden services to 
    three generations of our valued clients, in South Australia. For more than 35 years, Creative Landscapes 
    have excelled in providing arguably the very best in landscaping services.`,

    `We understand that our existing clients and future clients are very busy professionals that demand the 
    very best for their home and garden. We at Creative Landscapes get it right from the very beginning 
    and that starts with our ability to take your landscape and garden brief and implement it into a real dream garden.`,

    `We will not bore you with lengthy paragraphs about how much we are driven by creative garden designs filled 
    with flare and our attention to quality and detail, together with a high standard of workmanship that is second 
    to none in completing our landscape installations. Our completed project gallery will speak volumes and attest to our professional abilities.`,

    `We will however impress you with our ability to carefully listen to your project brief and carefully incorporate your 
    every dream and ambition into our completed garden design for your home, office, factory or development project.`,
  ];

  const keywords = [
    "garden services",
    "South Australia",
    "35 years",
    "Creative Landscapes",
    "landscaping services",
    "dream garden",
    "quality",
    "workmanship",
    "project gallery",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: isMobile ? "1rem" : "2rem",
        boxSizing: "border-box",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.02 }}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          maxWidth: "850px",
          width: "100%",
          borderRadius: "16px",
          padding: isMobile ? "1rem" : "2rem",
          boxShadow: "0 4px 25px rgba(0,0,0,0.5)",
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "lightgreen",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              textAlign: "center",
              letterSpacing: 1,
              fontFamily: `"Times New Roman", Times, serif`,
            }}
          >
            About Us
          </Typography>

          {paragraphs.map((text, i) => (
            <Typography
              key={i}
              sx={{
                color: "#ffffff",
                textAlign: "justify",
                fontSize: isMobile ? "0.95rem" : "1.05rem",
                lineHeight: 1.7,
                marginBottom: i !== 3 ? "1.2rem" : "0",
                fontFamily: `"Times New Roman", Times, serif`,
              }}
            >
              {highlight(text, keywords)}
            </Typography>
          ))}
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default About;
