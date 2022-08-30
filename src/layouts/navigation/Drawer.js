import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import AgentList from "./agent/AgentList";

export default function Drawer({ open, onClose }) {
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      onOpen={() => {}}
    >
      <AgentList />
    </SwipeableDrawer>
  );
}
