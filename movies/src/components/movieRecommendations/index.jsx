import React from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner';
import MovieCard from "../movieCard";
import { getMovieRecommendations } from "../../api/tmdb-api";
import Grid from "@mui/material/Grid";

export default function MovieRecommendations({ movie }) {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ['recommendations', { id: movie.id }],
    queryFn: getMovieRecommendations,
  });
  
  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    
      data.results.map(rec => (
        <Grid key={rec.id} size={{xs: 13, sm: 7, md: 5, lg: 4, xl: 3}} sx={{padding: "5px"}}>
          <MovieCard movie={rec} action={() => null} />
        </Grid>
      ))
    
  );
  

}