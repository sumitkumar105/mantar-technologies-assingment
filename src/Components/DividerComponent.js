import React from "react";
import { Box } from "@mui/material";
function DividerComponent({ height, width }) {
  return (
    <>
      {/*<-----Drawer component its work both side horizontally and vertically ------>*/}
      <Box
        sx={{ height: height ? height : "0px", width: width ? width : "0px" }}
      />
    </>
  );
}

export default DividerComponent;
