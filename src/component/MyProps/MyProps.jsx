import React, { useEffect } from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

import MyPropsCardContainer from "./MyPropsCardContainer";
import LoadingSpinnerEachSection from "../loadingSpinner/LoadingSpinnerEachSection";
import { useSelector } from "react-redux";

export default function MyProps({
  mode,
  callCompletedMyPropsApi,
  callUpCommingMyPropsApi,
  callLiveMyPropsApi,
}) {
  const [openTag, setOpenTag] = useState("Upcoming");
  // useEffect(() => {
  //   if (openTag === "Completed") {
  //     callCompletedMyPropsApi();
  //   } else if (openTag === "Live") {
  //     callLiveMyPropsApi();
  //   } else {
  //     callUpCommingMyPropsApi();
  //   }
  // }, [openTag]);
  const openUpComming = () => {
    setOpenTag("Upcoming");
    callUpCommingMyPropsApi();
  };
  const openLive = () => {
    setOpenTag("Live");
    callLiveMyPropsApi();
  };
  const openCompleted = () => {
    setOpenTag("Completed");
    callCompletedMyPropsApi();
  };
  const [myPropsAppBar, setMyPropsAppBar] = useState([
    { name: "Upcoming", func: openUpComming },
    { name: "Live", func: openLive },
    { name: "Completed", func: openCompleted },
  ]);

  const [upCommingDetail, setUpCommingDetail] = useState([
    {
      header: "3 pick to win $11.25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      src: "/defence-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/Notstarted.png", "/Notstarted.png", "/Notstarted.png"],
      won: false,
    },
    {
      header: "3 pick to win $11.25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      src: "/defence-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/Notstarted.png", "/Notstarted.png", "/Notstarted.png"],
      won: false,
    },
    {
      header: "3 pick to win $11.25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      src: "/defence-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/Notstarted.png", "/Notstarted.png", "/Notstarted.png"],
      won: false,
    },
    {
      header: "3 pick to win $11.25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      src: "/defence-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/Notstarted.png", "/Notstarted.png", "/Notstarted.png"],
      won: false,
    },
  ]);
  const [liveDetail, setliveDetail] = useState([
    {
      header: "3 pick to win $11.25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      condition: "In progress",
      src: "/defence-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/Notstarted.png", "/BetFail.png", "/BetSuccess.png"],
    },
    {
      header: "3 pick to win $25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      condition: "In progress",

      src: "/attack-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/Notstarted.png", "/Notstarted.png", "/Notstarted.png"],
    },
    {
      header: "5 pick to win $50",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      condition: "In progress",

      src: "/defence-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: [
        "/NotStartedBlue.png",
        "/BetFail.png",
        "/BetSuccess.png",
        "/Notstarted.png",
        "/Notstarted.png",
      ],
    },
    {
      header: "3 pick to win $25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      condition: "In progress",

      src: "/attack-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/Notstarted.png", "/Notstarted.png", "/Notstarted.png"],
    },
  ]);
  const [completedDetail, setCompletedDetail] = useState([
    {
      header: "3 pick to win $11.25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      condition: "Entry: $5.0",
      win: "win",
      src: "/defence-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "+$15.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/BetSuccess.png", "/BetSuccess.png", "/BetFail.png"],
      won: true,
    },
    {
      header: "3 pick to win $25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      condition: "Entry: $5.0",
      win: "lose",
      src: "/attack-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/BetFail.png", "/BetFail.png", "/BetFail.png"],
      won: true,
    },
    {
      header: "3 pick to win $11.25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      condition: "Entry: $5.0",
      win: "win",
      src: "/defence-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "+$15.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/BetSuccess.png", "/BetSuccess.png", "/BetFail.png"],
      won: true,
    },
    {
      header: "3 pick to win $25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      condition: "Entry: $5.0",
      win: "lose",
      src: "/attack-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/BetFail.png", "/BetFail.png", "/BetFail.png"],
      won: true,
    },
  ]);
  const completeDataCommingFromApi = useSelector(
    (state) => state.user.completeDataCommingFromApi
  );
  const liveDataCommingFromApi = useSelector(
    (state) => state.user.liveDataCommingFromApi
  );
  const upComingDataCommingFromApi = useSelector(
    (state) => state.user.upComingDataCommingFromApi
  );
  return (
    <Box
      sx={{
        width: {
          xl: "1000px",
          lg: "836px",
          md: "700px",
          sm: "500px",
          xxxs: "90%",
        },
        height: "100vh",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
      component="div"
    >
      <Typography
        sx={{
          fontSize: { xs: "16px", xxs: "14px", xxxs: "12px" },
          fontWeight: 700,
          fontFamily: "poppins",
          color: "secondary.dark_gray",
          mt: "23px",
          width: "100%",
        }}
      >
        My Props
      </Typography>
      <Box sx={{ width: "100%", mt: "9px" }}>
        <Box
          sx={{
            width: { xs: "232px", xxs: "170px", xxxs: "130px" },
            height: "2px",
            bgcolor: "secondary.dark",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "flex-start",
          mt: "11px",
          mb: "12px",
        }}
      >
        {myPropsAppBar.map((e, index) => (
          <Button
            key={index}
            sx={{
              fontSize: { xs: "12px", xxs: "10px", xxxs: "10px" },
              fontWeight: 600,
              fontFamily: "poppins",
              color: `${e.name === openTag ? "white" : "white"}`,
              bgcolor: `${e.name === openTag ? "#439F48" : "#4831D4"}`,
              textAlign: "center",
              padding: "6px 17px",
              "&.MuiButtonBase-root:hover": {
                bgcolor: `${e.name === openTag ? "#439F48" : "#4831D4"}`,
              },
              textTransform: "none",
              cursor: "pointer",
              mr: "8px",
            }}
            onClick={e.func}
          >
            {e.name}
          </Button>
        ))}
      </Box>
      {openTag === "Upcoming" && (
        <MyPropsCardContainer
          mode={mode}
          mainDetail={upComingDataCommingFromApi}
          openTag={openTag}
        />
      )}
      {openTag === "Live" && (
        <MyPropsCardContainer
          mode={mode}
          mainDetail={liveDataCommingFromApi}
          openTag={openTag}
        />
      )}
      {openTag === "Completed" && (
        <MyPropsCardContainer
          mode={mode}
          mainDetail={completeDataCommingFromApi}
          openTag={openTag}
        />
      )}
    </Box>
  );
}
