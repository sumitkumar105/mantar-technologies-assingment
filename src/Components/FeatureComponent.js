import React from "react";
import { Stack, Typography } from "@mui/material";
function FeatureComponent(props) {
  return (
    <div>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography sx={{ fontSize: { xs: 10, lg: 20 }, color: "blue" }}>
          Featured
        </Typography>
        <Typography sx={{ fontSize: { xs: 15, lg: 30 } }}>
          Reason why should you choose a{" "}
          <span style={{ color: "blue" }}>chatbox</span>
        </Typography>
        <Typography sx={{ fontSize: { xs: 10, lg: 20 }, color: "grey" }}>
          chatbox have several feature that makes reason
        </Typography>
        <Typography sx={{ fontSize: { xs: 10, lg: 20 }, color: "grey" }}>
          why should choose chatbox
        </Typography>
      </Stack>
    </div>
  );
}

export default FeatureComponent;
