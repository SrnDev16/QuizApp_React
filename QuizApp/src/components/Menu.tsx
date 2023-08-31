import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../App";
import CustomButton from "./CustomButton";

const Menu = () => {
  const { setAppState } = useContext(DataContext);
  return (
    <Box sx={MenuStyle}>
      <Typography variant="h4">Menu components</Typography>
      <CustomButton title="เริ่มทำแบบทดสอบ" onClick={()=> setAppState("quiz")}/>
    </Box>
  );
};

 export const MenuStyle = {
    width: "500px",
    height: "500px",
    backgroundColor : "#90caf9",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    p:2,
}

export default Menu;
