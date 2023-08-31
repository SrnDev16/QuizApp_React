import { createContext, useState } from "react";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import Score from "./components/Score";
import { Box, Typography } from "@mui/material";

export const DataContext = createContext<any>("");

function App() {
  const [appState, setAppState] = useState<string>("menu");
  const [score ,setScore] = useState<number>(0);

  return (
    <DataContext.Provider value={{ appState, setAppState , score,setScore}}>
      <Box sx={BoxStyle}>
        <Typography variant="h2">Quiz app</Typography>
        {appState === "menu" && <Menu />}
        {appState === "quiz" && <Quiz />}
        {appState === "score" && <Score />}
      </Box>
    </DataContext.Provider>
  );
}

const BoxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  backgroundColor: '#64b5f6',
  height: "100vh"
};

export default App;
