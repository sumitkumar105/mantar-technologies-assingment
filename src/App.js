import { Box, Grid } from "@mui/material";
import Styles from "./Styles/App.module.css";

import { cardData } from "./Constatnt/CardData";
import Navbar from "./Components/Navbar";
import FeatureCard from "./Components/FeatureCard";
import Section1 from "./Components/Section1";
import DividerComponent from "./Components/DividerComponent";
import FeatureComponent from "./Components/FeatureComponent";
import ChatbotComponent from "./Components/ChatbotComponent";
import MessageComponent from "./Components/MessageComponent";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className={Styles.root}>
        {/*<-----Navbar Component------>*/}
        <Navbar />
        {/*<-----Section1  Component with text------>*/}
        <DividerComponent height="50px" />
        <Section1 />
        {/*<-----Feature Components ------>*/}
        <DividerComponent height="30px" />
        <FeatureComponent />
        {/*<-----Feature Cards ------>*/}
        <DividerComponent height="30px" />
        <Grid
          container
          spacing={2}
          // direction={"row"}
          alignItems="center"
          justifyContent="center"
          sx={{
            marginLeft: { lg: "50px" },
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          {cardData?.map((cardInfo, index) => {
            return (
              <>
                <Grid item xs={12} md={6} lg={4}>
                  <FeatureCard card={cardInfo} />
                </Grid>
              </>
            );
          })}
        </Grid>
        {/*<-----ChabotComponent start here  ------>*/}
        <DividerComponent height="50px" />

        <ChatbotComponent />
        {/*<-----Message component start here  ------>*/}
        <DividerComponent height="80px" />
        <MessageComponent />
        <DividerComponent height="80px" />
        {/*<-----Footer component start here  ------>*/}
        <Footer />
      </div>
      {/*<-----Backround blue color recatngle  ------>*/}
      <Box
        sx={{
          hight: "750px",
          backgroundColor: "#141E46",
          display: { xs: "none", md: "none", lg: "block" },
        }}
      >
        <DividerComponent height="40px" />
      </Box>
    </>
  );
}

export default App;
