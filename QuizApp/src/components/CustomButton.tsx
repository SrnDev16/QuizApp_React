import { Button } from "@mui/material";
import { MouseEventHandler } from "react";

type buttonProps = {
  title: string,
  onClick?: MouseEventHandler,
};

const CustomButton = ({ title, onClick }: buttonProps) => {
  return (
    <Button sx={styleButton} onClick={onClick}>
      {title}
    </Button>
  );
};

const styleButton = {
    bgcolor: "#f5f5f5",
    color:"black",
    border:"none",
    p:1,
    mt: 2,
    width:"80%",
    '&:hover':{
       bgcolor:"black",
       color: "#ffa726",
       border:"none",
    },
    '&:active':{
        bgcolor:"#ffa726",
       color: "black",
       border:"none", 
    }
}

export default CustomButton;
