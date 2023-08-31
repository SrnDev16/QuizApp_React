import { Box, Typography } from "@mui/material";
import { MenuStyle } from "./Menu";
import QuestionsData from "../data/QuestionsData";
import { useContext, useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { DataContext } from "../App";

const Quiz = () => {
  const [current, setCurrent] = useState<number>(0);
  const [select, setSelect] = useState<string>("");
  const { score, setScore , setAppState} = useContext(DataContext);

  useEffect(() => {
    checkAnswers();
  }, [select]);

  const checkAnswers = () => {
    if (select !== "") {
      if (select === QuestionsData[current].answer) {
        console.log("ok");
        setScore(score + 1);
        nextQuestions();
      } else {
        console.log("Bad");
        nextQuestions()
      }
    }
  };

  const nextQuestions=()=>{
    setSelect("");
    if(current === QuestionsData.length-1){
        setAppState("score")
    }
    setCurrent(current+1);
  }

  return (
    <Box sx={MenuStyle}>
      <Typography variant="h4">{QuestionsData[current].question}</Typography>
      <Box>
        <CustomButton
          title={QuestionsData[current].A}
          onClick={() => setSelect("A")}
        />
        <CustomButton
          title={QuestionsData[current].B}
          onClick={() => setSelect("B")}
        />
        <CustomButton
          title={QuestionsData[current].C}
          onClick={() => setSelect("C")}
        />
        <CustomButton
          title={QuestionsData[current].D}
          onClick={() => setSelect("D")}
        />
      </Box>
      <br />
      <p>{`${current + 1} / ${QuestionsData.length}`}</p>
    </Box>
  );
};

export default Quiz;
