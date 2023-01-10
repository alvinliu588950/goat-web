import React from "react";
import EditAgent from "./EditAgent";
import DeleteAgent from "./DeleteAgent";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";


const AgentList = (props) => {
  return (
    
      <TableRow
        key={props.key}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center">{props.name}</TableCell>
        <TableCell align="center">{props.strategy}</TableCell>
        <TableCell align="center">
          <EditAgent
            id={props.id}
            name={props.name}
            strategy={props.strategy}
            updateAgent={props.updateAgent}
          />
          <DeleteAgent
            id={props.id}
            name={props.name}
            strategy={props.strategy}
            deleteAgent={props.deleteAgent}
          />
        </TableCell>
      </TableRow>
    
  );
};

export default AgentList;
