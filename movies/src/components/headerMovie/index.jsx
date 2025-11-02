import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";

const MovieHeader = (props) => {
  const movie = props.movie;

  return (
    <Paper 
        component="div" 
        sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: 1.5,
            margin: 0,
            backgroundColor:"lightblue"
        }}
      >
      <IconButton aria-label="go back">
        <ArrowBackIcon fontSize="large" sx={{color:"#111111"}}/>
      </IconButton>

      <Typography variant="h4" component="h3">
        {movie.title}
        <a href={movie.homepage}>
          <HomeIcon fontSize="large" sx={{color:"#111111"}}/>
        </a>
        <br />
        <span sx={{ fontSize: "1.5rem" }}>{`   "${movie.tagline}"`} </span>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon fontSize="large" sx={{color:"#111111"}}/>
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
