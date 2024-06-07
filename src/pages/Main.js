import { Outlet } from "react-router-dom";
import CustomAppBar from "../components/CustomAppBar";
import React from "react";
import { Box } from "@mui/material";

export default function Main() {
  return (
    <Box sx={{ height: "100vh" }}>
      <CustomAppBar />
      <Outlet />
    </Box>
  );
}
