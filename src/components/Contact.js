import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

const backgroundImage =
  "https://creativelandscapes.net.au/wp-content/uploads/2017/11/med017.png";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Please fill out this field.";
    if (!formData.email.trim()) {
      newErrors.email = "Please fill out this field.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Please fill out this field.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      alert("Form submitted! ✅");
      // 🔹 Add form handling logic here
    }
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

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
          maxWidth: "600px",
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
          Contact Us
        </Typography>

        <form noValidate onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            margin="normal"
            value={formData.name}
            onChange={handleChange("name")}
            error={!!errors.name}
            helperText={errors.name}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#90ee90" } }}
            sx={{ input: { backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 1 } }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={formData.email}
            onChange={handleChange("email")}
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#90ee90" } }}
            sx={{ input: { backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 1 } }}
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange("message")}
            error={!!errors.message}
            helperText={errors.message}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#90ee90" } }}
            sx={{ textarea: { backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 1 } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="success"
            fullWidth
            sx={{
              marginTop: "1rem",
              fontWeight: "bold",
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            Send Message
          </Button>
        </form>
      </motion.div>
    </Box>
  );
};

export default Contact;
