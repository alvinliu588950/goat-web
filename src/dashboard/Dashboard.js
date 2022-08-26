import React from "react";
import Box from "@mui/material/Box";
import Navigation from "./navigation/Navigation";

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navigation />
      <h1>Home</h1>
    </Box>
  );
}
