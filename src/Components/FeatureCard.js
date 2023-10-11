import React from "react";
import { Typography, Paper } from "@mui/material";

import DividerComponent from "./DividerComponent";
function FeatureCard({ card }) {
  let color = card.color ? "blue" : "";
  return (
    <Paper
      elevation={3}
      sx={{
        height: "270px",
        width: "270px",
        borderRadius: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
        flexDirection: "column",
        padding: "10px",
      }}
    >
      <Paper
        sx={{
          height: "60px",
          width: "60px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {card.icon}
      </Paper>
      <DividerComponent height="30px" />
      <Typography variant="h5" color={card.color ? "white" : "black"}>
        {card.title}
      </Typography>
      <DividerComponent height="10px" />
      <Typography variant="h6" color={card.color ? "white" : "grey"}>
        {card.sent1}
      </Typography>
      <DividerComponent height="5px" />
      <Typography variant="h6" color={card.color ? "white" : "grey"}>
        {card.sent2}
      </Typography>
    </Paper>
  );
}

export default FeatureCard;
