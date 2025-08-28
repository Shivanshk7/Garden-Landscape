import React from "react";
import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const location = useLocation();

  const fullWidthPaths = ["/", "/about", "/gallery", "/contact"];
  const isFullWidth = fullWidthPaths.includes(location.pathname);

  const isServicePage = location.pathname === "/services";

  return (
    <>
      <Navbar />
      {isFullWidth ? (
        <div>{children}</div>
      ) : isServicePage ? (
        <div
          style={{
            marginTop: "64px", // Fix overlap with navbar
            minHeight: "calc(100vh - 64px)",
          }}
        >
          {children}
        </div>
      ) : (
        <Container maxWidth="md" style={{ marginTop: "2rem" }}>
          {children}
        </Container>
      )}
    </>
  );
};

export default Layout;
