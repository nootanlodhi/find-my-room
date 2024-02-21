import React from "react";
import { ICardDetails } from "@/app/interface/Interface";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

interface IProps {
  data: ICardDetails;
}

const ReserveRoom: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <Box className="right-container-one" mt={3}>
        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <Typography variant="h6" gutterBottom fontWeight={700} mt={3}>
            ${data.pricePerNightInCents}
            <em className="night-txt"> / night</em>
          </Typography>
          <Stack direction="row" spacing={1} alignItems={"center"}>
            <StarIcon />
            <Typography variant="subtitle2" m={0} fontWeight={700} gutterBottom>
              {data.overallRating}
            </Typography>
          </Stack>
        </Stack>
        <Grid container spacing={2} mt={3}>
          <Grid item xs={12}>
            <TextField id="date" fullWidth label="Check In" type="date" defaultValue="2017-05-24" InputLabelProps={{shrink: true,}}/>
          </Grid>
          <Grid item xs={12}>
            <TextField id="date" fullWidth label="Check In" type="date" defaultValue="2017-05-30" InputLabelProps={{shrink: true,}}/>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Guest</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Guest">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Stack direction="row" spacing={2} justifyContent={"space-between"} mt={2}>
          <Typography variant="subtitle2" fontWeight={700} gutterBottom>6 nights</Typography>
          <Typography variant="subtitle2" fontWeight={700} gutterBottom>$2,199</Typography>
        </Stack>
        <Stack direction="row" spacing={2} justifyContent={"space-between"} mt={2}>
          <Typography variant="subtitle2" fontWeight={700} gutterBottom>Cleaning Fee</Typography>
          <Typography variant="subtitle2" fontWeight={700} gutterBottom>$85</Typography>
        </Stack>
        <Stack direction="row" spacing={2} justifyContent={"space-between"} mt={2}>
          <Typography variant="subtitle2" fontWeight={700} gutterBottom>Airbnb</Typography>
          <Typography variant="subtitle2" fontWeight={700} gutterBottom>$322</Typography>
        </Stack>
        <Stack direction="row" spacing={2} justifyContent={"space-between"} mt={2}>
          <Stack direction="column">
            <Typography fontSize={"15px"} variant="subtitle2" fontWeight={700} gutterBottom>
              Total
            </Typography>
            <Typography variant="body1" gutterBottom color="text.secondary" fontSize={"12px"} m={0}>
              Before Taxes
            </Typography>
          </Stack>
          <Typography variant="subtitle2" fontWeight={700} gutterBottom>
            $322
          </Typography>
        </Stack>
        <Box mt={3}>
          <Button sx={{width:"100%", borderRadius:"8px"}} variant="contained" color="error">
            Reserve
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ReserveRoom;
