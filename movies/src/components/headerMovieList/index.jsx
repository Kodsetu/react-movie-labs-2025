import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const Header = (props ) => {
  const title = props.title
  return (
    <Paper 
      component="div" 
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: 1.5,
        backgroundColor:"lightblue"
      }}
      >
      <IconButton
        aria-label="go back"
      >
        <ArrowBackIcon fontSize="large" sx={{color:"#111111"}}/>
      </IconButton>

      <Typography variant="h4" component="h3">
        {title}
      </Typography>
      <IconButton
        aria-label="go forward"
      >
        <ArrowForwardIcon fontSize="large" sx={{color:"#111111"}}/>
      </IconButton>
    </Paper>
  );
};

export default Header;
