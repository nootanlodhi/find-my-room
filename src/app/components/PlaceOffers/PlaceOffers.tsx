import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import AccessibleIcon from "@mui/icons-material/Accessible";
import BedRoundedIcon from "@mui/icons-material/BedRounded";
import AddHomeWorkOutlinedIcon from "@mui/icons-material/AddHomeWorkOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import Offers from "./Offers";

interface IProps {
  amenities: string[];
}

const PlaceOffers: React.FC<IProps> = ({ amenities }) => {
  
  const handleIcon = (item: string) => {
    switch (item) {
      case "AC":
        return <AccessibleIcon />;
      case "TV":
        return <AccessibleIcon />;
      case "SOFA":
        return <AccessibleIcon />;
      case "PARKING_SPACE":
        return <AddHomeWorkOutlinedIcon />;
      case "FRIDGE":
        return <AddHomeWorkOutlinedIcon />;
      case "WIFI":
        return <AddHomeWorkOutlinedIcon />;
      case "SECURITY_CAMERA":
        return <BathroomOutlinedIcon />;
      case "FAN":
        return <BedRoundedIcon />;
      case "HEATER":
        return <BedRoundedIcon />;
      case "SHOWER":
        return <BathroomOutlinedIcon />;
      default:
        return <BathroomOutlinedIcon />;
    }
  };
  return (
    <>
      <Typography variant="body1" gutterBottom color="#e91793">
        Read More
      </Typography>
      <Box className="divider"></Box>
      <Typography variant="h5" mt={3} gutterBottom>
        What this place offers
      </Typography>
      <Grid container spacing={2} mt={2}>
        {amenities.map((item, index) => {
          return (
            <>
              <Grid item xs={4} key={index}>
                <Offers Icon={() => handleIcon(item)} text={item} />
              </Grid>
            </>
          );
        })}
      </Grid>
      <Typography variant="body1" mt={4} gutterBottom color="#e91793">
        View More
      </Typography>
      <Box className="divider"></Box>
    </>
  );
};

export default PlaceOffers;
