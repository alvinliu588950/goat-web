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

export default function AgentList() {
  let navigate = useNavigate();
  const agents = [
    {
      name: "dio",
      icon: <HomeIcon />,
    },
    {
      name: "bucharati",
      icon: <HomeIcon />,
    },
    {
      name: "jojo",
      icon: <HomeIcon />,
    },
  ];
  return (
    <List>
      {agents.map((agents) => (
        <ListItem key={agents.name}>
          <ListItemButton
            onClick={() => {
              navigate(`/agent/${agents.name}`);
            }}
          >
            <ListItemText primary={agents.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
