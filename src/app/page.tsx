"use client"
import * as React from "react";
import { Grid } from "@mui/material";
import data from "../app/data/schema.json";
import TemporaryDrawer from "./components/Modal/CardDetailsModal";
import { ICardDetails } from "./interface/Interface";
import BasicCard from "./components/Cards/Card";
import FilterBar from "./components/Filterbar";

export default function Home() {
  const [openModal , setOpenModal] = React.useState<boolean>(false);
  const [cardDetails , setCardDetails] = React.useState<ICardDetails[]>([]);

  const handleCardDetails = (id:number) =>{
    const filterData = data.filter((item) => item.id === id);
    setCardDetails(filterData)
    setOpenModal(true)
  }
  
  return (
    <main>
      <FilterBar/>
      <Grid container spacing={4} p={10}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={index} onClick={()=>handleCardDetails(item.id)} sx={{cursor:"pointer"}}>
            <BasicCard cardItem={item}/>
          </Grid>
        ))}
      </Grid>
        {openModal && <TemporaryDrawer openModal={openModal} setOpenModal={setOpenModal} cardDetails={cardDetails}/>}
    </main>
  );
}
