"use client";
import * as React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ICardDetails } from "../../interface/Interface";

interface IProps{
  cardItem:ICardDetails
}

const BasicCard:React.FC<IProps> = ({cardItem}) => {
    return (
      <Card sx={{ borderRadius: "20px", height: "100%" }}>
        <CardContent sx={{ padding: "0", minHeight: "300px" }}>
          <Box className="img-box" sx={{ backgroundImage: `url(${cardItem.thumbnailUrl})` }}>
            <Box className="fav-icon-container">
              <FavoriteBorderIcon />
            </Box>
          </Box>
          <Grid container direction="column" justifyContent="space-between" height="100%">
            <Grid item>
              <Box p={2} height={"10rem"}>
                <Typography variant="h3" sx={{ fontSize: "2rem" }} gutterBottom>
                  {cardItem.title}
                </Typography>
                <Typography variant="h5" color="text.secondary" gutterBottom>
                  {cardItem.location.street}, {cardItem.location.state},{" "}{cardItem.location.country}
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box p={2}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="subtitle2" fontWeight={700} gutterBottom>
                    ${cardItem.pricePerNightInCents}
                    <em className="night-txt"> / night</em>
                  </Typography>
                  <Box display={"flex"} gap={1} alignItems={"center"}>
                    <StarIcon />
                    <Typography variant="subtitle2" m={0} fontWeight={700} gutterBottom>
                      {cardItem.ratings.accuracy}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }

  export default BasicCard;
  