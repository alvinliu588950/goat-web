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

export default function ListTitles({ setDrawerOpen }) {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const lists = [
    {
      name: "Agent",
      icon: <HomeIcon />,
      url: "/lists/agent", //Testing if could get the url props
    },
    {
      name: "Test",
      icon: <HomeIcon />,
      url: "/lists/test",
    },
    {
      name: "Test 2",
      icon: <HomeIcon />,
      url: "/lists/test2",
    },
  ];

  const getAgentapi = async (lists) => {
    setIsLoading(true);

    await axios
      .get(`${lists.url}`)
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
      {lists.map((lists) => (
        <ListItem key={lists.name}>
          <ListItemButton
            onClick={() => {
              setDrawerOpen(false);
              getAgentapi(lists);
              navigate(`/${lists.name}`);
            }}
          >
            <ListItemIcon> {lists.icon} </ListItemIcon>
            <ListItemText primary={lists.name} />
          </ListItemButton>
          {isLoading && <p>Loading...</p>}
        </ListItem>
      ))}
    </List>
  );
}
