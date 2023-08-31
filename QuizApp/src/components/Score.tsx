import { Box, Typography } from "@mui/material";
import { MenuStyle } from "./Menu";
import { useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionsData";
import CustomButton from "./CustomButton";

const Score = () => {
  const { score, setAppState, setScore } = useContext(DataContext);
  return (
    <Box sx={MenuStyle}>
      <Typography variant="h3">สรุปผลคะแนน</Typography>
      <Typography variant="h4">
        {score} / {QuestionsData.length}
      </Typography>
      <CustomButton
        title="ทำแบบทดสอบอีกครั้ง"
        onClick={() => {
          setAppState("menu");
          setScore(0);
        }}
      />
    </Box>
  );
};

export default Score;
