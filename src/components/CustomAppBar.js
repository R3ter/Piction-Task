import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export default function CustomAppBar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <AppBar elevation={0} position="static">
      <Container maxWidth="xl" sx={{ paddingTop: 3, display: "flex" }}>
        <Box sx={{ position: "absolute" }}>
          {location.key !== "default" && (
            <Button
              onClick={() => {
                navigate(-1);
              }}
              sx={{ padding: 0, height: 30 }}
              color="secondary"
            >
              <Typography variant="h4">{"<"}</Typography>
            </Button>
          )}
        </Box>
        <Typography
          sx={{
            alignSelf: "center",
            textAlign: "center",
            flex: 1,
          }}
          variant="h5"
        >
          New assessment
        </Typography>
      </Container>
    </AppBar>
  );
}
