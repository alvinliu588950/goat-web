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
      url: "https://goat-360609.de.r.appspot.com/agent/detail?name=mudamuda",
    },
    {
      name: "bucharati",
      icon: <HomeIcon />,
      url: "000",
    },
    {
      name: "jojo",
      icon: <HomeIcon />,
      //Testing if could get the url props
      url: "000",
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
