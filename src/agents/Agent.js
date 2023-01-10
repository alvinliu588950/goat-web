import { React, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import DashboardLayout from "layouts/DashboardLayout";
import AgentList from "layouts/forms/AgentList";
import AddAgentForm from "layouts/forms/AddAgentForm";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Card from "UI/Card";
import Pagination from "layouts/navigation/Pagination";

function Agent() {
  const [lists, setLists] = useState([
    {
      id: 1,
      name: "mudamuda",
      strategy: "raise",
    },
    {
      id: 2,
      name: "Test",
      strategy: "bet",
    },
    {
      id: 3,
      name: "Test 2",
      strategy: "bet 2",
    },
    {
      id: 4,
      name: "Test 3",
      strategy: "bet 3",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = lists.slice(firstPostIndex, lastPostIndex);

  function updateAgent(id, newName, newStrategy) {
    const updatedAgnetList = lists.map((agent) => {
      if (id === agent.id) {
        return { ...agent, name: newName, strategy: newStrategy };
      }

      return agent;
    });
    setLists(updatedAgnetList);
  }

  function deleteAgent(id) {
    const newLists = lists.filter((li) => id !== li.id);
    setLists(newLists);
  }

  function newAgent(name, strategy) {
    const newAgent = {
      id: uuidv4(),
      name: name,
      strategy: strategy,
    };

    setLists([...lists, newAgent]);
  }

  return (
    <DashboardLayout>
      <div className="card-title m-20 mx-auto block" align="center">
        <h2>Agent Lists</h2>
      </div>
      <Card style={{ width: "50%" }}>
        <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
          <TableHead style={{ backgroundColor: "dodgerblue" }}>
            <TableRow>
              <TableCell
                style={{ fontFamily: "sans-serif", fontSize: "20px" }}
                align="center"
              >
                Agent Name
              </TableCell>
              <TableCell
                style={{ fontFamily: "sans-serif", fontSize: "20px" }}
                align="center"
              >
                Strategy
              </TableCell>
              <TableCell
                style={{ fontFamily: "sans-serif", fontSize: "20px" }}
                align="center"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPosts.map((agent) => {
              return (
                <AgentList
                  key={agent.id}
                  id={agent.id}
                  name={agent.name}
                  strategy={agent.strategy}
                  updateAgent={updateAgent}
                  deleteAgent={deleteAgent}
                />
              );
            })}
          </TableBody>
        </Table>
      </Card>
      <AddAgentForm newAgent={newAgent} />
      <Pagination
        totalPosts={lists.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        firstPostIndex={firstPostIndex}
        lastPostIndex={lastPostIndex}
      />
    </DashboardLayout>
  );
}
export default Agent;
