import React, { useState, useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router";
import Paper from "@mui/material/Paper";


const ratings = [
  {
    value: 5,
    label: "Excellent",
  },
  {
    value: 4,
    label: "Good",
  },
  {
    value: 3,
    label: "Average",
  },
  {
    value: 2,
    label: "Poor",
  },
  {
    value: 0,
    label: "Terrible",
  },
];

const styles = {
  root: {
    marginTop: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    color: "white",
  },
  form: {
    width: "100%",
    "& > * ": {
      marginTop: 2,
    },
  },
  textField: {
    width: "40ch",
  },
  snack: {
    width: "50%",
    "& > * ": {
      width: "100%",
    },
  },
};

const ReviewForm = ({ movie }) => {
  const context = useContext(MoviesContext);
  const [rating, setRating] = useState(3);
  const [open, setOpen] = useState(false); 
  const navigate = useNavigate();

  const handleSnackClose = (event) => {
    setOpen(false);
    navigate("/movies/favorites");
  };
  
  const defaultValues = {
    author: "",
    review: "",
    agree: false,
    rating: "3",
  };
  
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm(defaultValues);

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const onSubmit = (review) => {
    review.movieId = movie.id;
    review.rating = rating;
    // console.log(review);
    context.addReview(movie, review);
    setOpen(true); // NEW
  };

  return (
    <Box component="div" sx={styles.root}>
      <Typography component="h2" variant="h3">
        Write a review
      </Typography>
      <Paper sx={{backgroundColor:"#0f0f0f", color:"white"}}>
        <Snackbar
          sx={styles.snack}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          onClose={handleSnackClose}
        >
          <MuiAlert
            severity="success"
            variant="filled"
            onClose={handleSnackClose}
          >
            <Typography variant="h4">
              Thank you for submitting a review
            </Typography>
          </MuiAlert>
        </Snackbar>

        <form sx={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
          <Controller
            name="author"
            control={control}
            rules={{ required: "Name is required" }}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                sx={{ 
                  width: "40ch",
                  input: {color:"white"},
                  label: {color:"white"}
                }}
                variant="outlined"
                margin="normal"
                required
                onChange={onChange}
                value={value}
                id="author"
                label="Author's name"
                name="author"
                autoFocus
              />
            )}
          />
          {errors.author && (
            <Typography variant="h6" component="p">
              {errors.author.message}
            </Typography>
          )}
          <Controller
            name="review"
            control={control}
            rules={{
              required: "Review cannot be empty.",
              minLength: { value: 10, message: "Review is too short" },
            }}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                sx={{
                  "& .MuiInputBase-inputMultiline": {color:"white"},
                  label: {color:"white"}
                }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="review"
                value={value}
                onChange={onChange}
                label="Review text"
                id="review"
                multiline
                minRows={10}
              />
            )}
          />
          {errors.review && (
            <Typography variant="h6" component="p">
              {errors.review.message}
            </Typography>
          )}

          <Controller
            control={control}
            name="rating"
            render={({ field: { onChange, value } }) => (
              <TextField
                sx={{
                  "& .MuiInputBase-input": {color:"white"},
                  "& .MuiFormHelperText-root":{color:"white"},
                  label: {color:"white"},
                  "& .MuiSvgIcon-root": { color: "white" },
                }}
                id="select-rating"
                select
                variant="outlined"
                label="Rating Select"
                value={rating}
                onChange={handleRatingChange}
                helperText="Don't forget your rating"
              >
                {ratings.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />

          <Box>
            <Button
              type="submit"
              variant="contained"
              sx={{backgroundColor:"lightgreen", color:"black"}}
            >
              Submit
            </Button>
            <Button
              type="reset"
              variant="contained"
              sx={{backgroundColor:"red", color:"black"}}
              onClick={() => {
                reset({
                  author: "",
                  content: "",
                });
              }}
            >
              Reset
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default ReviewForm;
