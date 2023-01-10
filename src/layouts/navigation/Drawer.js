import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import FormList from "./lists/ListTitles";

export default function Drawer({ open, onClose, setDrawerOpen }) {
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      onOpen={() => {}}
    >
      <FormList setDrawerOpen={setDrawerOpen}/>
    </SwipeableDrawer>
  );
}
