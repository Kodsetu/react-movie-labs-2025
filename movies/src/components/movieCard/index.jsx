import React, { useContext  } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router";
import Avatar from '@mui/material/Avatar';

export default function MovieCard({ movie, action }) {
  const { favorites, addToFavorites } = useContext(MoviesContext);


  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  let tempDate = new Date(movie.release_date);
  let releaseYear = tempDate.getFullYear();
  let releaseMonth = tempDate.getMonth();
  let releaseDay = tempDate.getDay();
  let dateString = releaseDay.toString() + "-" + monthNames[releaseMonth].substring(0,3) + "-" + releaseYear.toString().substring(2,4);


  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false
  }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(movie);
  };

  return (
    <Card>
      <CardHeader
        sx={{backgroundColor:"#0f0f0f", color:"white"}}
        avatar={
          movie.favorite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent
        sx={{backgroundColor:"#0f0f0f", color:"white"}}>
        <Grid container>
          <Grid size={{xs: 7}}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {dateString}
            </Typography>
          </Grid>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing
      sx={{backgroundColor:"#0f0f0f"}}>
      
        {action(movie)}
      
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" sx={{color:"lightblue"}}>
            More Info ...
          </Button>
        </Link>
        
      </CardActions>
    </Card>
  );
}
