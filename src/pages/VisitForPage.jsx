import { Box, Fade } from "@mui/material";
import QuestionWithChoices from "../components/QuestionWithChoices";
import Logo from "../components/Logo";
import { setFor } from "../Redux/slicer";
import useHandlePageSubmit from "../hooks/useHandlePageSubmit";

const VisitFor = () => {
  const handlePageSubmit = useHandlePageSubmit();

  return (
    <Box sx={{ margin: "25px", marginTop: "40vh" }}>
      <Fade style={{ transitionDuration: "1000ms" }} in={true}>
        <div>
          <Logo style={{ width: "162px", height: "54px", marginBottom: "64px" }} />
        </div>
      </Fade>
      <QuestionWithChoices
        onSelectOption={(value) => {
          handlePageSubmit(value, setFor, "/name");
        }}
        question={"Who is this visit for?"}
        choices={[
          { title: "Me", value: "me" },
          { title: "Someone else", value: "else" },
        ]}
      />
    </Box>
  );
};

export default VisitFor;
