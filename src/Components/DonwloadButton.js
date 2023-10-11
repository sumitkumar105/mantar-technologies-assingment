import React from "react";
import { Button } from "@mui/material";
function DonwloadButton({ icon, color, margin, textColor }) {
  return (
    <div>
      {/*<-----DonwloadButton Component------>*/}
      <Button
        variant="outlined"
        sx={{
          height: "50px",
          width: "200px",
          borderRadius: "24px",
          textAlign: "center",
          backgroundColor: color,
          color: textColor,
          marginLeft: { xs: "0px", lg: margin },
        }}
        startIcon={icon}
      >
        Dowonload now
      </Button>
    </div>
  );
}

export default DonwloadButton;
