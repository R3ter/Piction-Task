import { Box, Typography } from "@mui/material";
import useCohere from "../hooks/useCohere";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SummaryPage = () => {
  const name = useSelector((state) => state.name);
  const birthday = useSelector((state) => state.birthDay);
  const issue = useSelector((state) => state.issue);
  const prompt = `
  Craft a detailed and concise summary of the patient's healthcare information in paragraph form. in less than 6 sentence.
Patient Information:
Name: ${name}
Date of Birth: ${birthday}
Reported Issue: ${issue}
`;

  const { generateText, data, error, loading } = useCohere();

  useEffect(() => {
    generateText(prompt);
    console.log("wad");
  }, [generateText, prompt]);

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
