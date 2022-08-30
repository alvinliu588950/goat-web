import React, { useState } from "react";
import NavBar from "./NavBar";
import Drawer from "./Drawer";

export default function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <NavBar onMenuBtnClick={() => setDrawerOpen((prev) => !prev)} />
      <Drawer
        setDrawerOpen={setDrawerOpen}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
