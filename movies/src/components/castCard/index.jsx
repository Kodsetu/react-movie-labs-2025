import React, { useContext  } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'

export default function CastCard({ cast, action }) {

  return (
    <Card>
      <CardHeader 
        sx={{backgroundColor:"lightblue"}}
        title={
          <Typography variant="h5" component="p">
            {cast.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 342 }}
        image={
          cast.profile_path
            ? `https://image.tmdb.org/t/p/w342/${cast.profile_path}`
            : img
        }
      />
      <CardContent
        sx={{backgroundColor:"lightblue"}}>
        <Grid container>
          <Grid size={{xs: 10}}>
            <Typography variant="h6" component="p">
              <TheaterComedyIcon fontSize="small" />
              {cast.character}
            </Typography>
          </Grid>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {cast.popularity}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
