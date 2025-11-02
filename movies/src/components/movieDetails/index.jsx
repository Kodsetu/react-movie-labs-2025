import React, { useState } from "react";import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"
import MovieRecommendations from "../movieRecommendations";
import MovieCast from "../movieCast";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
    backgroundColor: "#0f0f0f",
};


const MovieDetails = ({ movie }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3" color="white">
        Overview
      </Typography>

      <Typography variant="h6" component="p" color="white">
        {movie.overview}
      </Typography>

      <Paper  
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{backgroundColor:"red", margin: 0.5,  color: "white"}} />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{backgroundColor:"lightblue", margin: 0.5,}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} sx={{backgroundColor:"lightblue", margin: 0.5,}}/>
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
          sx={{backgroundColor:"lightblue", margin: 0.5,}}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count})`}
          sx={{backgroundColor:"lightblue", margin: 0.5,}}
        />
        <Chip icon={<CalendarIcon />} label={`${movie.release_date}`} sx={{backgroundColor:"lightblue", margin: 0.5,}}/>
      </Paper>
      <br/>
      <Typography variant="h5" component="h3" color="white">
        Cast
      </Typography>
      <Paper component="ul" sx={{...root}}>
        <MovieCast movie = {movie}/>
      </Paper>
      <br/>
      <Typography variant="h5" component="h3" color="white">
        Recommended
      </Typography>
      <Paper component="ul" sx={{...root}}>
        <MovieRecommendations movie={movie}/>
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      </>
  );
};
export default MovieDetails ;
