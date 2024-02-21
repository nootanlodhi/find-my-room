import React from "react";
import { Avatar, Box, Stack, FormControl,InputLabel, Select, MenuItem, Grid, TextField } from "@mui/material";
import DatasetIcon from '@mui/icons-material/Dataset';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const FilterBar = () => {
  return (
    <Box className="filter-container">
      <Stack direction="row" spacing={2} justifyContent={"space-between"} alignItems={"center"} pr={10} pl={10}>
        <Stack direction="row">
          <DatasetIcon fontSize="large"/>
          <button className="icon-btn"><BrokenImageOutlinedIcon fontSize="large"/></button>
        </Stack>
        <Stack direction="row" sx={{width:"20%"}} spacing={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">AnyWhere</InputLabel>
            <Select fullWidth labelId="demo-simple-select-label" id="demo-simple-select" label="AnyWhere">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField id="date" fullWidth label="Check In" type="date" defaultValue="2017-05-30" InputLabelProps={{shrink: true,}}/>
        </Stack>
        <button className="icon-btn"><FilterAltOutlinedIcon fontSize="large"/></button>
      </Stack>
    </Box>
  );
};

export default FilterBar;
