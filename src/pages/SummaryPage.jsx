import { Box, Typography } from "@mui/material";
import useOpenAI from "../hooks/useOpenai";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";

const SummaryPage = () => {
  const name = useSelector((state) => state.name);
  const birthday = useSelector((state) => state.birthDay);
  const issue = useSelector((state) => state.issue);
  const { data, loading, error } = useOpenAI(`
  Patient Name: ${name}
  Date of Birth: ${birthday}
  Symptoms and Feelings: ${issue}
  Based on the provided information, what potential condition might the patient have? Provide a possible diagnosis in four sentences.`);

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
