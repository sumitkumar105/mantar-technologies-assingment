import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import DividerComponent from "./DividerComponent";
import chatBotImage from "../Assets/chabot.png";
function MessageComponent(props) {
  return (
    <div>
      <DividerComponent height="80px" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexWrap: "wrap",
          textAlign: { xs: "center" },
        }}
      >
        <Paper
          sx={{
            height: "500px",
            width: { xs: "auto", lg: "500px" },
            backgroundColor: "grey",
            borderRadius: "24px",
            margin: { xs: "20px" },
          }}
        >
          <img
            style={{ height: "500px", width: "500px", borderRadius: "24px" }}
            src={chatBotImage}
            alt="chatbot"
          />
        </Paper>
        <DividerComponent width="100px" />
        <Box sx={{ height: "500px", width: "500px", backgroundColor: "white" }}>
          <DividerComponent height="40px" />
          <Box>
            <Typography variant="h4">Send message in </Typography>
            <Typography variant="h4">
              {" "}
              <span style={{ color: "blue", fontWeight: "bold" }}>
                Real Time
              </span>
              , without
            </Typography>
            <Typography variant="h4">any delay between us</Typography>
          </Box>
          <DividerComponent height="40px" />
          <Box>
            <Typography variant="h6" sx={{ color: "grey" }}>
              send message easily using only mobile or desktop
            </Typography>
            <Typography variant="h6" sx={{ color: "grey" }}>
              and application with of myrid feature that can
            </Typography>
            <Typography variant="h6" sx={{ color: "grey" }}>
              make your experience different from another application
            </Typography>
            <DividerComponent height="40px" />
            <Button
              variant="contained"
              // className={Styles.btn}
              sx={{
                height: "50px",
                width: "120px",
                borderRadius: "24px",
                textAlign: "center",
              }}
            >
              <Typography sx={{ fontSize: 10, color: "white" }}>
                Learn More{" "}
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default MessageComponent;
