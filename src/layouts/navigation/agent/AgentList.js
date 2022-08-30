import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AgentList({ setDrawerOpen }) {
  let navigate = useNavigate();
  const agents = [
    {
      name: "mudamuda",
      icon: <HomeIcon />,
    },
    {
      name: "bucharati",
      icon: <HomeIcon color="primary" />,
    },
    {
      name: "dio",
      icon: <DeleteIcon />,
    },
  ];
  return (
    <List>
      {agents.map((agent) => (
        <ListItem key={agent.name}>
          <ListItemButton
            onClick={() => {
              setDrawerOpen(false);
              navigate(`/agent/${agent.name}`);
            }}
          >
            <ListItemIcon>{agent.icon}</ListItemIcon>
            <ListItemText primary={agent.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
