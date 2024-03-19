import React from "react";
import { Box, Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import { IHost } from "@/app/interface/Interface";
import { joinedDate } from "@/app/Utils/utils";

interface IProps {
  host: IHost;
}

const Host: React.FC<IProps> = ({ host }) => {

  return (
    <>
      <Typography variant="h6" gutterBottom fontWeight={700} mt={3}>Host</Typography>
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Stack direction="row" spacing={2}>
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src={host.profileUrl} />
          </IconButton>
          <Stack direction="column">
            <Typography variant="body1" gutterBottom fontSize={"15px"} m={0}>{host.name}</Typography>
            <Typography variant="body1" gutterBottom color="text.secondary" fontSize={"12px"} m={0}>
              {joinedDate(host.joinedAt)}
            </Typography>
          </Stack>
        </Stack>
        <Button variant="outlined" color="error">Contact Host</Button>
      </Stack>
      <Grid container mt={2} spacing={2}>
        <Grid item xs={4}>
          <Stack direction="row" spacing={1} alignItems={"center"}>
            <StarIcon />
            <Typography variant="subtitle2" fontWeight={700} gutterBottom>
              {host.totalReviews} reviews
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack direction="row" spacing={1} alignItems={"center"}>
            <ShieldOutlinedIcon />
            <Typography variant="subtitle2" fontWeight={700} gutterBottom>
              {host.isVerified ? "Identity Verified" : "Identity Not Verified"}{" "}
              reviews
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack direction="row" spacing={1} alignItems={"center"}>
            <ShieldOutlinedIcon />
            <Typography variant="subtitle2" fontWeight={700} gutterBottom>
              {host.isSuperHost ? "Superhost" : "Not Superhost"} reviews
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Typography variant="subtitle2" gutterBottom mt={3}>
        {host.bio}
      </Typography>
      <Typography variant="body1" mt={4} gutterBottom color="#e91793">
        View More
      </Typography>
      <Box className="divider"></Box>
    </>
  );
};

export default Host;
