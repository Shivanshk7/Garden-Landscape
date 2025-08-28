import React, { useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
  Modal,
} from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const backgroundImage = "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med017.png";

const Gallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

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

  const galleryImages = [
    "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med011.png",
    "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med006.png",
    "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med018.png",
    "https://creativelandscapes.net.au/wp-content/uploads/2017/11/small001.png",
    "https://creativelandscapes.net.au/wp-content/uploads/2017/11/small003.png",
    "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med017.png",
    "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med008.png",
    "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med010.png",
    "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med001.png",
    "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med002.png",
    "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med003.png",
    "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med004.png",
    "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med005.png",
    "https://creativelandscapes.net.au/wp-content/uploads/2017/11/small002.png",
    "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med016.png",
    "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med012.png",
    "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med013.png",
    "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med014.png",
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
          maxWidth: "1000px",
          width: "100%",
          borderRadius: "16px",
          padding: isMobile ? "1rem" : "2rem",
          boxShadow: "0 4px 25px rgba(0,0,0,0.5)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#90ee90",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            textAlign: "center",
            letterSpacing: 1,
            fontFamily: "Times New Roman, Times, serif",
          }}
        >
          Our Project Gallery
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "1rem",
          }}
        >
          {galleryImages.map((img, idx) => (
            <Box
              key={idx}
              component="img"
              src={img}
              alt={`Gallery ${idx + 1}`}
              onClick={() => handleOpen(idx)}
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 2px 12px rgba(255,255,255,0.2)",
                transition: "transform 0.3s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          ))}
        </Box>

        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#000",
              borderRadius: "12px",
              boxShadow: 24,
              padding: "1rem",
              outline: "none",
              width: isMobile ? "90vw" : "70vw",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{ color: "white", position: "absolute", top: 10, right: 10 }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              component="img"
              src={galleryImages[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                mb: 2,
              }}
            />
            <Typography variant="body1" sx={{ color: "#90ee90", mb: 1 }}>
              Image {currentIndex + 1} of {galleryImages.length}
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
            >
              <IconButton onClick={handlePrev} sx={{ color: "white" }}>
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton onClick={handleNext} sx={{ color: "white" }}>
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          </Box>
        </Modal>
      </motion.div>
    </Box>
  );
};

export default Gallery;
