import React from "react";
import { Box, Typography, Stack, Paper } from "@mui/material";
import DividerComponent from "./DividerComponent";
import chatBotImage from "../Assets/chabot.png";
function ChatbotComponent(props) {
  return (
    <Box>
      <DividerComponent height="80px" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            height: "500px",
            width: "500px",
            backgroundColor: "white",
            textAlign: { xs: "center" },
          }}
        >
          <DividerComponent height="40px" />
          <Box>
            <Typography sx={{ fontSize: { xs: 20, lg: 40 } }}>
              Communicate more
            </Typography>
            <Typography sx={{ fontSize: { xs: 20, lg: 40 } }}>
              efficiantly by using
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 20, lg: 40 },
                color: "blue",
                fontWeight: "bold",
              }}
            >
              Chatox
            </Typography>
          </Box>
          <DividerComponent height="40px" />
          <Box>
            <Typography sx={{ fontSize: { xs: 12, lg: 20 } }}>
              send message easily using only mobile or desktop
            </Typography>
            <Typography sx={{ fontSize: { xs: 12, lg: 20 } }}>
              and application with of myrid feature that can
            </Typography>
            <Typography sx={{ fontSize: { xs: 12, lg: 20 } }}>
              make your experience different from another application
            </Typography>
            <DividerComponent height="40px" />
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              spacing={2}
              sx={{ flexDirection: { xs: "column", lg: "row" } }}
            >
              <Stack direction="column" alignItems="center" spacing={2}>
                <Typography sx={{ fontSize: { xs: 12, lg: 30 } }}>
                  1M+
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: 12, lg: 20 }, color: "grey" }}
                >
                  users
                </Typography>
              </Stack>
              <Stack direction="column" alignItems="center" spacing={2}>
                <Typography sx={{ fontSize: { xs: 12, lg: 30 } }}>
                  2M+
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: 12, lg: 20 }, color: "grey" }}
                >
                  Download
                </Typography>
              </Stack>
              <Stack direction="column" alignItems="center" spacing={2}>
                <Typography sx={{ fontSize: { xs: 12, lg: 30 } }}>
                  2+
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: 12, lg: 20 }, color: "grey" }}
                >
                  Years
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <DividerComponent width="100px" />

        <Paper
          sx={{
            height: "500px",
            width: "500px",
            backgroundColor: "grey",
            borderRadius: "24px",
          }}
        >
          <img
            style={{ height: "500px", width: "500px", borderRadius: "24px" }}
            src={chatBotImage}
            alt="chatbot"
          />
        </Paper>
      </Box>
    </Box>
  );
}

export default ChatbotComponent;
