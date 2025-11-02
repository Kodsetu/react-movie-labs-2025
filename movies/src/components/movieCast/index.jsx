import React from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner';
import CastCard from "../castCard";
import { getMovieCast } from "../../api/tmdb-api";
import Grid from "@mui/material/Grid";

export default function MovieCast({ movie }) {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ['cast', { id: movie.id }],
    queryFn: getMovieCast,
  });
  
  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    
      data.map(castMember => (
        <Grid key={castMember.id} size={{xs: 13, sm: 7, md: 5, lg: 4, xl: 3}} sx={{padding: "5px"}}>
          <CastCard cast={castMember} action={() => null} />
        </Grid>
      ))
    
  );
  

}