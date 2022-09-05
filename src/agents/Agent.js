import React from "react";
import DashboardLayout from "layouts/DashboardLayout";
import { useParams } from "react-router-dom";

export default function Agent() {
  const { name } = useParams();

  return (
    <DashboardLayout>
      <h1>Agent: {name} </h1>
    </DashboardLayout>
  );
}
