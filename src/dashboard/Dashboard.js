import React from "react";
import Box from "@mui/material/Box";
import Navigation from "./navigation/Navigation";

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navigation />
      <h1>Agent: mudamuda</h1>
    </Box>
  );
}
