import React, { useState } from "react";
import { Stack, Typography, Box, Button } from "@mui/material";
import SmsIcon from "@mui/icons-material/Sms";
import NavHeading from "./NavHeading";
import MenuIcon from "@mui/icons-material/Menu";

import DrawerComponent from "./DrawerComponent";
function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrwawer = () => {
    setOpenDrawer(true);
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Stack
      direction="row"
      sx={{ height: "80px" }}
      justifyContent="space-around"
      alignItems="center"
    >
      {/*<-----Drawer component start here------>*/}
      <MenuIcon
        onClick={handleOpenDrwawer}
        sx={{
          fontSize: 40,
          color: "white",
          display: { xs: "block", md: "none", lg: "none" },
        }}
      />
      {openDrawer && (
        <DrawerComponent
          open={openDrawer}
          handleCloseDrawer={handleCloseDrawer}
        />
      )}
      {/*<-----Drawer component end here------>*/}

      {/*<-----Navbar Title and Icon------>*/}
      <Stack direction="row" spacing={1} alignItems="center">
        <SmsIcon sx={{ color: "white", fontSize: 30 }} />
        <Typography variant="h5" sx={{ color: "white" }}>
          Chatbox
        </Typography>
      </Stack>
      {/*<-----Nav Heading component start here------>*/}
      <Box sx={{ display: { xs: "none", md: "none", lg: "block" } }}>
        <NavHeading />
      </Box>
      {/*<-----Navbar Button------>*/}
      <Button
        variant="contained"
        // className={Styles.btn}
        sx={{
          height: "50px",
          width: "180px",
          borderRadius: "24px",
          textAlign: "center",
          backgroundColor: "white",
          display: { xs: "none", md: "none", lg: "block" },
          "& hover": {
            display: "none",
          },
        }}
      >
        <Typography sx={{ color: "blue" }}>Try free </Typography>
      </Button>
    </Stack>
  );
}

export default Navbar;
