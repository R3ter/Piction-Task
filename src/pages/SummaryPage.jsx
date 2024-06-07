import { Box, Typography } from "@mui/material";
import useOpenAI from "../hooks/useOpenai";
import Skeleton from "@mui/material/Skeleton";

const SummaryPage = () => {
  const { data, loading, error } = useOpenAI("prompt");

  return (
    <Box sx={{ margin: 2 }}>
      <Box sx={{ m: 7 }} />
      <Typography variant="h4">Summary</Typography>
      <Box sx={{ m: 3 }} />
      {error && <Typography color={"red"}>Error: {error}</Typography>}
      {loading && (
        <Box sx={{ padding: "16px" }}>
          {["80%", "60%", "90%", "70%", "50%"].map((width, index) => (
            <Skeleton key={index} variant="text" width={width} />
          ))}
        </Box>
      )}

      <Typography variant="h5">{data}</Typography>
    </Box>
  );
};
export default SummaryPage;
