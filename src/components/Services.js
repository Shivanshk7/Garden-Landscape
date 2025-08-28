import React from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const backgroundImage = "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med009.png";

const services = [
  {
    title: "Consultation & Design Presentation",
    img: "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med010.png",
  },
  {
    title: "Landscape Installation",
    img: "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med008.png",
  },
  {
    title: "Garden Maintenance",
    img: "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med006.png",
  },
  {
    title: "Irrigation Systems and Water Management",
    img: "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med011.png",
  },
  {
    title: "Stone and Masonry Walling",
    img: "https://creativelandscapes.net.au/wp-content/uploads/2017/11/small001.png",
  },
  {
    title: "Timber Decks and Patios",
    img: "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med018.png",
  },
  {
    title: "Swimming Pools & Spas",
    img: "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med010.png",
  },
  {
    title: "Lighting and Special Effects",
    img: "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med008.png",
  },
  {
    title: "Paving",
    img: "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med006.png",
  },
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: isMobile ? 4 : 8,
        px: 2,
        boxSizing: "border-box",
        marginTop: "-64px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          padding: isMobile ? "1.5rem" : "2.5rem",
          borderRadius: "12px",
          maxWidth: "1200px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" sx={{color: "#90ee90",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            textAlign: "center",
            letterSpacing: 1,
            fontFamily: "Times New Roman, Times, serif",}}>
            Our Services
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Typography variant="body1" sx={{ mb: 2, fontSize: "1.05rem", fontFamily: "Times New Roman, serif" }}>
            We are a full service landscape and garden maintenance company. Creative Landscapes is supported by the very best suppliers of garden products including soils, mulches and turf. We source our plants, shrubs and trees from the very best nurseries in Australia with a special focus on South Australian grown plant material.
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, fontSize: "1.05rem", fontFamily: "Times New Roman, serif" }}>
            Our detailed services include every aspect of your garden needs. Attention to how the finished landscape will look and feel in the morning with the light of the new dawn or the midday light and shade requirements and the evening colors and attention to lighting effects is part of our attention to your garden. We completely understand the importance of environmental planning and the attention to detail that is required.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, fontFamily: "Times New Roman, serif" }}>
            Services We Offer:
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={service.img}
                    alt={service.title}
                    sx={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      transition: "transform 0.4s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                  <Box
                    sx={{
                      background: "linear-gradient(135deg, #43a047, #66bb6a)",
                      padding: "0.75rem",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "bold",
                        color: "#003300",
                        fontFamily: "Times New Roman, serif",
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;