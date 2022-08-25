import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Activate from "./Activate";

export default function AgentList() {
  const Agent = [
    { id: "Bucharati", text: "Agent Bucharati" },
    { id: "Mister", text: "Agent Mister" },
    { id: "Dio", text: "Agent Dio" },
    { id: "Jojo", text: "Agent Jojo" },
  ];

  return (
    <List>
      <ListItem>
        <ListItemButton onClick={Activate}>
          <ListItemText primary={Agent[0].text} />
        </ListItemButton>
      </ListItem>

      <ListItem>
        <ListItemButton>
          <ListItemText primary={Agent[1].text} />
        </ListItemButton>
      </ListItem>

      <ListItem>
        <ListItemButton>
          <ListItemText primary={Agent[2].text} />
        </ListItemButton>
      </ListItem>

      <ListItem>
        <ListItemButton>
          <ListItemText primary={Agent[3].text} />
        </ListItemButton>
      </ListItem>
    </List>
  );
}