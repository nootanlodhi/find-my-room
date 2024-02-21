"use client"
import React from "react";
import { Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent={"space-between"} alignItems={"center"} pr={10} pl={10}>
        <div className="logo-container"></div>
        <Stack direction="row" spacing={4} justifyContent={"space-between"}>
        <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">Stay</Link>
          <Typography>Experiences</Typography>
          <Typography>Online Experiences</Typography>
        </Stack>
          <Avatar alt="Remy Sharp" src={"https://fmr-frontend-test.s3.ap-south-1.amazonaws.com/profile-4.jpeg"} />
      </Stack>
    </>
  );
};

export default Navbar;
