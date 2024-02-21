import { Box, Grid, Typography } from "@mui/material";
import React from "react";

interface IProps {
  Icon: any;
  text: string;
}

const Offers: React.FC<IProps> = ({ Icon, text }) => {
  return (
    <Box display={"flex"} gap={1}>
      <Icon />
      <Typography variant="subtitle2" fontWeight={700} gutterBottom>
        {text}
      </Typography>
    </Box>
  );
};

export default Offers;
