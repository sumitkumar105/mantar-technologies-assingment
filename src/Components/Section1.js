import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DividerComponent from "./DividerComponent";
import DonwloadButton from "./DonwloadButton";
import DashboardImage from "../Assets/chatDashboard2.png";
function Section1(props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/*<-----Section  Component start here------>*/}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          textAlign: { xs: "center" },
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 25, lg: 50 },
              wordSpacing: "15px",
              color: "white",
            }}
          >
            Get the best
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 25, lg: 50 },
              wordSpacing: "15px",
              color: "white",
            }}
          >
            <span style={{ fontSize: 50, fontWeight: "bold" }}>experience</span>{" "}
            when
          </Typography>
          <Typography
            // variant="h2"
            sx={{
              fontSize: { xs: 25, lg: 50 },
              wordSpacing: "15px",
              color: "white",
            }}
          >
            sending messages.
          </Typography>
        </Box>
        <DividerComponent width="250px" />
        <Box>
          <Typography
            sx={{
              fontSize: { xs: 10, lg: 20 },
              wordSpacing: "15px",
              color: "white",
            }}
          >
            platform used to send message with myrid
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 10, lg: 20 },
              wordSpacing: "15px",
              color: "white",
            }}
          >
            of feature by prioitizing the user experience
          </Typography>

          <DividerComponent height="20px" />
          <DonwloadButton icon={<AppleIcon />} color="white" margin={"215px"} />
          <DividerComponent height="20px" />
          <DonwloadButton
            icon={<PlayArrowIcon />}
            color="white"
            margin={"215px"}
          />
        </Box>
      </Box>
      {/*<-----Chat Dashbord image   start here------>*/}
      <DividerComponent height="80px" />
      <Paper
        sx={{
          height: { xs: "auto", lg: "auto" },
          width: { xs: "270px", lg: "80%" },
          // backgroundColor: "grey",
          borderRadius: "12px",
        }}
      >
        <img
          style={{
            height: { xs: "270px", lg: "600px", padding: "5px" },
            width: "100%",
            borderRadius: "12px",
          }}
          src={DashboardImage}
          alt="dashboard"
        />
      </Paper>
      <DividerComponent height="80px" />
    </Box>
  );
}

export default Section1;
