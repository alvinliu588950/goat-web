import React from "react";
import Box from "@mui/material/Box";
import Navigation from "./navigation/Navigation";

export default function DashboardLayout({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navigation />
      {children}
    </Box>
  );
}
