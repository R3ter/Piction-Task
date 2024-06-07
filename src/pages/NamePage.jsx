import { Box } from "@mui/material";
import QuestionField from "../components/QuestionField";
import FooterSubmit from "../components/FooterSubmit";
import { setName } from "../Redux/slicer";
import { useSelector } from "react-redux";
import useHandlePageSubmit from "../hooks/useHandlePageSubmit";
import { useRef, useState } from "react";

const NamePage = () => {
  const name = useSelector((state) => state.name);
  const handlePageSubmit = useHandlePageSubmit();
  const nameValue = useRef(name);
  const [error, setError] = useState("");
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          marginTop: "25vh",
        }}
      >
        <QuestionField
          defaultValue={name}
          validateErrorMsg="Name should be three or more characters long."
          validation={(value) => {
            if (value.length < 3) return false;
            return true;
          }}
          error={error}
          onFieldChange={(e) => {
            nameValue.current = e.target.value;
            setError("");
          }}
          title={"What's your name?"}
          placeHolder="John Doe"
        />
      </Box>
      <FooterSubmit
        onSubmit={() => {
          if (!nameValue.current) {
            setError("Fill in your name please");
            return;
          }
          if (nameValue.current.length < 3) return;
          handlePageSubmit(nameValue.current, setName, "/birthDay");
        }}
      />
    </Box>
  );
};

export default NamePage;
