import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

export default function AgentList() {
  const Agent = [
    { id: "Bucharati", text: "Agent Bucharati" },
    { id: "Mister", text: "Agent Mister" },
    { id: "Dio", text: "Agent Dio" },
    { id: "Jojo", text: "Agent Jojo" },
  ];
  return (
    <List id={Agent.id}>
      {Agent.map((name) => (
        <ListItem>
          <ListItemButton>
            <ListItemText primary={name.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
