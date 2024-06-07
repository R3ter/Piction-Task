import { Box, Grow, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useState } from "react";

const QuestionField = ({
  onFieldChange = () => {},
  title,
  placeHolder = "",
  date = false,
  rows = 0,
  defaultValue = "",
  validateErrorMsg = "validation error",
  error = "",
  validation = () => true,
}) => {
  const [validateError, setValidateError] = useState("");
  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <Grow timeout={1000} in>
        <Typography
          variant="h5"
          sx={{ fontWeight: "400", textAlign: "center", marginInline: 5, marginBottom: "28px" }}
        >
          {title}
        </Typography>
      </Grow>
      {date ? (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer sx={{ marginInline: "80px" }} components={["DatePicker"]}>
            <DatePicker
              onChange={(e) => {
                if (!validation(e)) {
                  setValidateError(validateErrorMsg);
                } else {
                  setValidateError("");
                }
                onFieldChange(e);
              }}
              defaultValue={defaultValue || null}
              views={["year", "month", "day"]}
              maxDate={dayjs(new Date())}
              format="DD/MM/YYYY"
              sx={{
                ...(error || validateError ? { borderColor: "red" } : {}),
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
              slotProps={{
                textField: {
                  helperText: error || validateError || "",
                },
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      ) : (
        <TextField
          error={!!(error || validateError)}
          defaultValue={defaultValue}
          variant="standard"
          helperText={error || validateError || ""}
          InputProps={{ disableUnderline: true }}
          placeholder={placeHolder}
          multiline={!!rows}
          rows={rows}
          onChange={(e) => {
            if (!validation(e.target.value)) {
              setValidateError(validateErrorMsg);
            } else {
              setValidateError("");
            }
            onFieldChange(e);
          }}
          sx={
            error || validateError
              ? { marginInline: "61px", borderColor: "red" }
              : { marginInline: "61px" }
          }
        />
      )}
    </Box>
  );
};
export default QuestionField;
