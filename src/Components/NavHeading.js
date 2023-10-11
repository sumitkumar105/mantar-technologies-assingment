import React from "react";
import { Typography, Stack } from "@mui/material";
import { NavData } from "../Constatnt/Navdata";
function NavHeading(props) {
  return (
    <Stack direction="row" spacing={8}>
      {NavData?.map((heading, index) => {
        return (
          <>
            <Typography variant="h6" sx={{ color: "white" }}>
              {heading}
            </Typography>
          </>
        );
      })}
    </Stack>
  );
}

export default NavHeading;
