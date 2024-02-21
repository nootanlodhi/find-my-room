import * as React from "react";
import { ICardDetails } from "@/app/interface/Interface";
import { Box, Grid, Typography, Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccessibleIcon from "@mui/icons-material/Accessible";
import BedRoundedIcon from "@mui/icons-material/BedRounded";
import AddHomeWorkOutlinedIcon from "@mui/icons-material/AddHomeWorkOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import CardImg from "../CardImages/CardImg";
import Offers from "../PlaceOffers/Offers";
import PlaceOffers from "../PlaceOffers/PlaceOffers";
import RatingAndReview from "../RatingAndReview";
import Host from "../Host";
import ReserveRoom from "../ReserveRoom";

interface IProps {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  cardDetails: ICardDetails[];
}

const TemporaryDrawer: React.FC<IProps> = ({ openModal, setOpenModal, cardDetails }) => {
  return (
    <>
      <Drawer anchor="right" sx={{position:"relative"}} open={openModal}>
        <Box className="close-icon-container" onClick={() => setOpenModal(false)}>
          <CloseIcon />
        </Box>
        <Box sx={{ width: "100%" }}>
          {cardDetails &&
            cardDetails.map((item, index) => {
              return (
                <Box key={index} padding={3}>
                  <CardImg images={item.imageUrls} />
                  <Grid container mt={4} spacing={4}>
                    <Grid item xs={8}>
                      <Box>
                        <Typography variant="h4" fontSize={"1.8rem"} gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography variant="h5" color="text.secondary" fontSize={"1.4rem"} gutterBottom>
                          {item.location.street}, {item.location.state},{" "}{item.location.country}
                        </Typography>
                      </Box>
                      <Grid container spacing={2} mt={2}>
                        <Grid item xs={2}>
                          <Offers Icon={AccessibleIcon} text={`${item.maxGuests} + guests`}/>
                        </Grid>
                        <Grid item xs={2}>
                          <Offers Icon={AddHomeWorkOutlinedIcon} text={`${item.numberOfBedrooms} bedrooms`}/>
                        </Grid>
                        <Grid item xs={2}>
                          <Offers Icon={BedRoundedIcon} text={`${item.numberOfBeds} beds`}/>
                        </Grid>
                        <Grid item xs={2}>
                          <Offers Icon={BathroomOutlinedIcon} text={`${item.numberOfBathroom} baths`}/>
                        </Grid>
                      </Grid>
                      <Box className="divider"></Box>
                      <Typography variant="h5" gutterBottom mt={4}>
                        About this space
                      </Typography>
                      <Typography variant="body1" gutterBottom color="text.secondary">
                        {item.about}
                      </Typography>
                      <Typography variant="h5" gutterBottom mt={3}>
                        The space
                      </Typography>
                      <Typography variant="body1" gutterBottom color="text.secondary">
                        {item.spaceDescription}
                      </Typography>
                      <PlaceOffers amenities={item.amenities} />
                      <RatingAndReview ratings={item.ratings} />
                      <Host host={item.host} />
                    </Grid>
                    <Grid item xs={4}>
                      <ReserveRoom data={item} />
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
        </Box>
      </Drawer>
    </>
  );
};

export default React.memo(TemporaryDrawer);
