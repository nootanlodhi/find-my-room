"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <Box sx={{ flexGrow: 1, backgroundColor:"#fff" }}>
      <AppBar position="fixed" sx={{backgroundColor:"#fff" }}>
        <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
          <div className="logo-container"></div>
          <Stack direction="row" display={{xs:"none", sm:"block"}} spacing={4} justifyContent={"space-between"}>
            <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">Stay</Link>
            <Link className={`link ${pathname === "/experience" ? "active" : ""}`} href="/">Experiences</Link>
            <Link className={`link ${pathname === "/online-experience" ? "active" : ""}`} href="/">Online Experiences</Link>
          </Stack>
          <Avatar alt="Remy Sharp" src={"https://fmr-frontend-test.s3.ap-south-1.amazonaws.com/profile-4.jpeg"} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
