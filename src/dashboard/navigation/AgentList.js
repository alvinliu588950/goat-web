import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { Link } from "react-router-dom";

export default function AgentList() {
  const Agent = [
    { id: "Bucharati", text: "Agent Bucharati" },
    { id: "Mister", text: "Agent Mista" },
    { id: "Dio", text: "Agent Dio" },
    { id: "Jojo", text: "Agent Jojo" },
  ];

  return (
    <List>
      <ListItem>
        <ListItemButton button component={Link} to="/agentbucharati">
          <ListItemText primary={Agent[0].text} />
        </ListItemButton>
      </ListItem>

      <ListItem>
        <ListItemButton button component={Link} to="/agentmista">
          <ListItemText primary={Agent[1].text} />
        </ListItemButton>
      </ListItem>

      <ListItem>
        <ListItemButton button component={Link} to="/agentdio">
          <ListItemText primary={Agent[2].text} />
        </ListItemButton>
      </ListItem>

      <ListItem>
        <ListItemButton button component={Link} to="/agentjojo">
          <ListItemText primary={Agent[3].text} />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
