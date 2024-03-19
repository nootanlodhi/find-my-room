import { joinedDate } from "@/app/Utils/utils";
import { IReview } from "@/app/interface/Interface";
import { Avatar, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

interface IProps {
  reviews: IReview[];
}

const Reviewers: React.FC<IProps> = ({ reviews }) => {

  return (
    <>
      <Typography variant="h6" gutterBottom fontWeight={700} mt={3}>
        All Reviewers
      </Typography>
      {reviews.map((item, index) => {
        return (
          <Stack key={index} direction="column" spacing={2} mt={4} mb={4}>
            <Stack direction="row" spacing={2}>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={item.profileUrl} />
              </IconButton>
              <Stack direction="column">
                <Typography variant="body1" gutterBottom fontSize={"15px"} m={0}>
                  {item.reviewerName}
                </Typography>
                <Typography variant="body1" gutterBottom color="text.secondary" fontSize={"1rem"} m={0}>
                  {joinedDate(item.createdAt)}
                </Typography>
              </Stack>
            </Stack>
            <Typography variant="body1" gutterBottom fontSize={"1.2rem"} m={0}>
              {item.review}
            </Typography>
          </Stack>
        );
      })}
    </>
  );
};

export default Reviewers;
