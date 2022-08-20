import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export default function Drawer({ open, onClose }) {
  return (
    <SwipeableDrawer anchor="left" open={open} onClose={onClose}>
      Agent
      <ul>
        <li>Agent: mudamuda</li>
        <li>Agent: 布加拉提</li>
      </ul>
    </SwipeableDrawer>
  );
}
