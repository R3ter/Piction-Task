import { Box } from "@mui/material";
import QuestionField from "../components/QuestionField";
import FooterSubmit from "../components/FooterSubmit";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import useHandlePageSubmit from "../hooks/useHandlePageSubmit";
import { setIssue } from "../Redux/slicer";

const IssuePage = () => {
  const issue = useSelector((state) => state.issue);
  const issueValue = useRef(issue);
  const handlePageSubmit = useHandlePageSubmit();
  const [error, setError] = useState("");
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          marginTop: "25vh",
        }}
      >
        <QuestionField
          title={"Describe in your issue in your own words"}
          placeHolder="start typing here..."
          rows={4}
          defaultValue={issueValue.current}
          onFieldChange={(element) => {
            issueValue.current = element.target.value;
            setError("");
          }}
          validateErrorMsg="Please enter a minimum of three words"
          validation={(e) => {
            return e.trim().split(/\s+/).length >= 3;
          }}
          error={error}
        />
      </Box>
      <FooterSubmit
        onSubmit={() => {
          if (!issueValue.current) {
            setError("please describe your issue");
            return;
          }
          if (issueValue.current.trim().split(/\s+/).length < 3) return;
          handlePageSubmit(issueValue.current, setIssue, "/Summary");
        }}
      />
    </Box>
  );
};
export default IssuePage;
