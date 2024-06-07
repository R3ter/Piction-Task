import { Box } from "@mui/material";
import QuestionField from "../components/QuestionField";
import FooterSubmit from "../components/FooterSubmit";
import { useSelector } from "react-redux";
import { setBirthDay } from "./../Redux/slicer";
import { useRef, useState } from "react";
import dayjs from "dayjs";
import useHandlePageSubmit from "../hooks/useHandlePageSubmit";

const BirthDayPage = () => {
  const name = useSelector((state) => state.name);
  const birthday = useSelector((state) => state.birthDay);
  const birthdayValue = useRef(birthday);
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
          title={`Great to meet you, ${name}! What's your date of birth?`}
          placeHolder="Enter DOB"
          date
          
          error={error}
          defaultValue={dayjs(birthday, "DD/MM/YYYY")}
          onFieldChange={(e) => {
            birthdayValue.current = dayjs(e).format("DD/MM/YYYY");
            setError("");
          }}
        />
      </Box>
      <FooterSubmit
        onSubmit={() => {
          if (!birthdayValue.current) {
            setError("please fill in you'r birth date");
            return;
          }
          handlePageSubmit(birthdayValue.current, setBirthDay, "/Issue");
        }}
      />
    </Box>
  );
};
export default BirthDayPage;
