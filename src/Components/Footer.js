import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import DonwloadButton from "./DonwloadButton";
import chatImg from "../Assets/chatDashboard2.png";
import AppleIcon from "@mui/icons-material/Apple";
import SmsIcon from "@mui/icons-material/Sms";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DividerComponent from "./DividerComponent";
function Footer(props) {
  return (
    <Box sx={{ height: "800px", width: "100%" }}>
      {/*<-----Footer uper image part start here  ------>*/}
      <Box
        sx={{
          height: "400px",
          width: "100%",
          backgroundColor: "#0079FF",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <img
          style={{
            height: "300px",
            width: "60%",
            borderRadius: "24px 24px 0px 0px",
          }}
          src={chatImg}
          alt="demo"
        />
      </Box>
      <Box
        sx={{
          height: "600px",
          width: "100%",
          backgroundColor: "black",
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <DividerComponent height="50px" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack direction="column" spacing={1}>
            <Typography variant="h3" sx={{ color: "white" }}>
              Want to stay
            </Typography>
            <Typography variant="h3" sx={{ color: "white" }}>
              Connected?
            </Typography>
          </Stack>
          <DividerComponent width="200px" />
          <Stack direction="row" spacing={2}>
            <DonwloadButton
              icon={<AppleIcon />}
              color="blue"
              textColor="white"
            />
            <DonwloadButton
              icon={<PlayArrowIcon />}
              color="black"
              textColor="white"
            />
          </Stack>
        </Box>
        <DividerComponent height="50px" />
        {/*<-----Divier start here  ------>*/}
        <Box
          sx={{ height: "1px", width: "80%", backgroundColor: "grey" }}
        ></Box>
        <DividerComponent height="150px" />
        {/*<-----Footers Details  ------>*/}
        <Box sx={{ height: "300px", width: "80%" }}>
          <Stack direction="row">
            <Box
              sx={{
                height: "300px",
                width: "30%",
                // backgroundColor: "cyan",
                display: "flex",
                textAlign: "center",
                alignItems: "cneter",
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
              >
                <SmsIcon sx={{ color: "white", fontSize: 30 }} />
                <Typography variant="h5" sx={{ color: "white" }}>
                  Chatbox
                </Typography>
              </Stack>
              <DividerComponent height="30px" />
              <Box sx={{ color: "grey" }}>
                <Typography>Platform used to send message</Typography>
                <Typography>with myriad of feature by</Typography>
                <Typography>prioritzing the user experience</Typography>
              </Box>
              <DividerComponent height="30px" />
              <Typography variant="h6" sx={{ color: "white" }}>
                mail@chatbox.com
              </Typography>
            </Box>
            <Box
              sx={{
                height: "300px",
                width: "70%",
                // backgroundColor: "yellow",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "cneter",
              }}
            >
              <Stack direction="column" spacing={2} sx={{ color: "white" }}>
                <Typography>Home </Typography>

                {["About us", "Download", "Coomunity"].map((text, index) => {
                  return (
                    <>
                      <Typography>{text}</Typography>
                    </>
                  );
                })}
              </Stack>
              <Stack direction="column" spacing={2} sx={{ color: "white" }}>
                <Typography>Feature </Typography>
                {["About us", "Download", "Coomunity"].map((text, index) => {
                  return (
                    <>
                      <Typography>{text}</Typography>
                    </>
                  );
                })}
              </Stack>
              <Stack direction="column" spacing={2} sx={{ color: "white" }}>
                <Typography>Social Media </Typography>
                <Typography>Feature </Typography>
                {["About us", "Download", "Coomunity"].map((text, index) => {
                  return (
                    <>
                      <Typography>{text}</Typography>
                    </>
                  );
                })}
              </Stack>
            </Box>
          </Stack>
        </Box>
        {/* <DividerComponent height="20px" /> */}
        <Typography sx={{ color: "white" }}>
          All right reserved by chatbox
        </Typography>
        <DividerComponent height="30px" />
      </Box>
    </Box>
  );
}

export default Footer;
