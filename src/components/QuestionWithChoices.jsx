import { Box, Button, Typography, Stack } from "@mui/material";

const QuestionWithChoices = ({ question, choices, onSelectOption }) => {
  return (
    <Box>
      <Typography fontWeight={"400"} fontSize={25}>
        {question}
      </Typography>
      <Stack spacing={3} sx={{ marginTop: "20px", float: "right" }}>
        {choices?.map((choice, index) => {
          return (
            <Button
              onClick={() => {
                onSelectOption(choice?.value || choice.title, index);
              }}
              variant="outlined"
              sx={{ marginLeft: "auto" }}
              color="secondary"
              key={index}
            >
              {choice?.title || choice}
            </Button>
          );
        })}
      </Stack>
    </Box>
  );
};
export default QuestionWithChoices;
