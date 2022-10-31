import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import axios from "axios";

export default function AgentList({ setDrawerOpen }) {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const agents = [
    {
      name: "mudamuda",
      icon: <HomeIcon />,
      url: "/agent/mudamuda", //Testing if could get the url props
    },
    {
      name: "bucharati",
      icon: <HomeIcon />,
      url: "/agent/bucharati",
    },
    {
      name: "jojo",
      icon: <HomeIcon />,
      url: "/agent/jojo",
    },
  ];

  const getAgentapi = async (agents) => {
    setIsLoading(true);

    await axios
      .get(`${agents.url}`)
      .then((res) => {
        setIsLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <List>
      {agents.map((agents) => (
        <ListItem key={agents.name}>
          <ListItemButton
            onClick={() => {
              setDrawerOpen(false);
              getAgentapi(agents);
              navigate(`/agent/${agents.name}`);
            }}
          >
            <ListItemIcon> {agents.icon} </ListItemIcon>
            <ListItemText primary={agents.name} />
          </ListItemButton>
          {isLoading && <p>Loading...</p>}
        </ListItem>
      ))}
    </List>
  );
}
