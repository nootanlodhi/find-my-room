import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
import { Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { IRatings } from "@/app/interface/Interface";

interface IProps {
  ratings: IRatings;
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#e91793" : "#308fe8",
  },
}));

const RatingAndReview: React.FC<IProps> = ({ ratings }) => {
  return (
    <>
      <Box display="flex" justifyContent="space-between" mt={3} mb={3}>
        <Typography variant="h6" gutterBottom fontWeight={700}>
          Review
        </Typography>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <StarIcon />
          <Typography variant="subtitle2" m={0} fontWeight={700} gutterBottom>
            5.0 - 124 review
          </Typography>
        </Box>
      </Box>
      <Box p={2} className="review-container">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography variant="subtitle2" fontWeight={700} gutterBottom>Cleanliness</Typography>
          </Grid>
          <Grid item xs={8}>
            <BorderLinearProgress
              variant="determinate"
              value={(ratings.cleanliness / 5) * 100}
            />
          </Grid>
          <Grid item xs={1}>
            <Typography variant="subtitle2" fontWeight={700} gutterBottom>{ratings.cleanliness}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography variant="subtitle2" fontWeight={700} gutterBottom>Accuracy</Typography>
          </Grid>
          <Grid item xs={8}>
            <BorderLinearProgress variant="determinate" value={(ratings.accuracy / 5) * 100}/>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="subtitle2" fontWeight={700} gutterBottom>{ratings.accuracy}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography variant="subtitle2" fontWeight={700} gutterBottom>Communication</Typography>
          </Grid>
          <Grid item xs={8}>
            <BorderLinearProgress variant="determinate" value={(ratings.location / 5) * 100}/>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="subtitle2" fontWeight={700} gutterBottom>{ratings.location}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography variant="subtitle2" fontWeight={700} gutterBottom>Location</Typography>
          </Grid>
          <Grid item xs={8}>
            <BorderLinearProgress variant="determinate" value={(ratings.location / 5) * 100}/>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="subtitle2" fontWeight={700} gutterBottom>{ratings.location}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography variant="subtitle2" fontWeight={700} gutterBottom>Check-In</Typography>
          </Grid>
          <Grid item xs={8}>
            <BorderLinearProgress variant="determinate" value={(ratings.service / 5) * 100}/>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="subtitle2" fontWeight={700} gutterBottom>{ratings.service}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="body1" mt={4} gutterBottom color="#e91793">View More</Typography>
      <Box className="divider"></Box>
    </>
  );
};

export default RatingAndReview;
