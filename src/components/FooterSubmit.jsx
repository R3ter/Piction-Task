import { Box, Button } from "@mui/material";

const FooterSubmit = ({ onSubmit = () => {} }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        width: "100%",
        position: "absolute",
        padding: 3,
        bottom: 0,
        marginTop: "auto",
      }}
    >
      <Button onClick={onSubmit} variant="outlined" color="secondary">
        Submit
      </Button>
    </Box>
  );
};
export default FooterSubmit;
