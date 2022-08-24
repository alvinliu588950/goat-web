import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

export default function AgentList() {
  const Agent = ["Agent Bucharati", "Agent Mister", "Agent Dio", "Agent Jojo"];
  return (
    <List>
      {Agent.map(
        (text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        )
      )}
    </List>
  );
}
