import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Input,
  Typography,
} from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import "./knowMore.css";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import OverUnderPointSystem from "./OverUnderPointSystem";
import FAQ from "./FAQ";
import OperatingState from "./OperatingState";

export default function KnowMore({ mode }) {
  const [general, setGeneral] = useState([
    {
      name: "Over-Under Points System",
      src: "/howto.png",
      darkSrc: "/howto-dark.png",
    },
    {
      name: "Frequently Asked Questions",
      src: "/fps.png",
      darkSrc: "/rules-dark.png",
    },
    {
      name: "Sports Battle Operating States",
      src: "/fps.png",
      darkSrc: "/fps-dark.png",
    },
  ]);
  const [legal, setLegal] = useState([
    { name: "Terms of Service", src: "/howto.png", darkSrc: "/howto-dark.png" },
    { name: "Privacy Policy", src: "/rules.png", darkSrc: "/rules-dark.png" },
    { name: "Responsible Play", src: "/fps.png", darkSrc: "/fps-dark.png" },
  ]);

  const [openTag, setOpenTag] = useState("Over-Under Points System");
  const [overUnderNav, setOverUnderNav] = useState([
    {
      name: "MLB",
      src: "/mlb.png",
      light_src: "/mlb_light.png",
      color: "blue",
    },
    {
      name: "PGA",
      src: "/pga.png",
      light_src: "/pga_light.png",
      color: "blue",
    },
    {
      name: "GOLF",
      src: "/golf.png",
      light_src: "/golf_light.png",
      color: "#E431F4",
    },
    {
      name: "NFL",
      src: "/nfl.png",
      light_src: "/nfl_light.png",
      color: "#F5A922",
    },
    {
      name: "WNBA",
      src: "/wnba.png",
      light_src: "/wnba_light.png",
      color: "#F5A922",
    },
    {
      name: "Cricket",
      src: "/cricket.png",
      light_src: "/cricket_light.png",
      color: "#D04643",
    },
    {
      name: "CSGO",
      src: "/csgo.png",
      light_src: "/csgo_light.png",
      color: "#00ffff",
    },
    {
      name: "MMA",
      src: "/mma.png",
      light_src: "/mma_light.png",
      color: "orange",
    },
    { name: "F1", src: "/f1.png", light_src: "/f1_light.png", color: "red" },
    {
      name: "CFL",
      src: "/cfl.png",
      light_src: "/cfl_light.svg",
      color: "#F5A922",
    },
    {
      name: "DOTA2",
      src: "/dota2.png",
      light_src: "/dota2_light.png",
      color: "#00ffff",
    },
    {
      name: "VAL",
      src: "/val.png",
      light_src: "/val_light.png",
      color: "blue",
    },
    {
      name: "Soccer",
      src: "/soccer.png",
      light_src: "/soccer_light.png",
      color: "#52C03C",
    },
    {
      name: "NBA",
      src: "/nba.png",
      light_src: "/nba_light.png",
      color: "#F5A922",
    },
  ]);
  const [selectSports, setSelectSports] = useState("Cricket");

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", mt: "50px" }}>
      {openTag === "Over-Under Points System" && (
        <Box
          component="div"
          sx={{
            width: {
              xl: "1000px",
              lg: "836px",
              md: "700px",
              sm: "550px",
              xs: "90%",
              xxxs: "95%",
            },
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: { xl: "space-between", xxxs: "space-between" },
            overflow: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            mb: "30px",
            mt: { sm: 0, xxxs: "20px" },
          }}
        >
          {overUnderNav.map((e) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mr: { xxxs: "15px", md: "" },
              }}
            >
              <Box
                sx={{
                  height: { xs: "34px", xxxs: "30px" },
                  width: { xs: "34px", xxxs: "30px" },
                  border: `${
                    mode === "dark" ? "2px solid white" : "1px solid #494949"
                  }`,
                  borderRadius: "50%",
                  mt: "13px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: `${
                    e.name === selectSports ? e.color : "primary.main"
                  }`,
                  cursor: "pointer",
                }}
                onClick={() => setSelectSports(e.name)}
              >
                {mode === "dark" ? (
                  <img className="propsNavImg" src={e.src} />
                ) : (
                  <>
                    {e.name === selectSports ? (
                      <img className="propsNavImg" src={e.src} />
                    ) : (
                      <img className="propsNavImg" src={e.light_src} />
                    )}
                  </>
                )}
              </Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  fontFamily: "poppins",
                  mt: "5px",
                  color: `${
                    e.name === selectSports ? e.color : "secondary.main"
                  }`,
                }}
              >
                {" "}
                {e.name}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
      <Box
        sx={{
          width: {
            xl: "1000px",
            lg: "836px",
            md: "700px",
            sm: "550px",
            xs: "90%",
            xxxs: "95%",
          },
          height: "100vh",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
        }}
        component="div"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "35%", xxxs: "25%" },
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: "16px", xs: "14px", xxxs: "12px" },
              fontWeight: 700,
              fontFamily: "poppins",
              width: "100%",
              color: "secondary.dark_gray",
              mb: "12px",
              ml: { xs: 0, xxxs: "5px" },
            }}
          >
            GENERAL
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "2px",
              background: "#D9D9D9",
              mb: "12px",
            }}
          ></Box>
          {general.map((e) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                mb: "20px",
                cursor: "pointer",
                borderBottom: { xs: "none", xxxs: "1px solid #494949" },
              }}
              onClick={() => {
                setOpenTag(e.name);
                e.func();
              }}
            >
              {mode === "dark" ? (
                <img src={e.src} className="know-icon" />
              ) : (
                <img src={e.darkSrc} className="know-icon" />
              )}
              <Box sx={{ width: "100%", ml: { sm: "8px", xxxs: "2px" } }}>
                <Typography
                  sx={{
                    fontSize: { lg: "14px", xs: "12px", xxxs: "10px" },
                    fontWeight: 700,
                    color: `${
                      openTag === e.name ? "#4831D4" : "secondary.dark_gray"
                    }`,
                    fontFamily: "poppins",
                  }}
                >
                  {e.name}
                </Typography>
                {e.extra && (
                  <Typography
                    sx={{
                      fontSize: { lg: "12px", xs: "10px", xxxs: "8px" },
                      fontWeight: 400,
                      color: "secondary.dark_gray",
                      fontFamily: "poppins",
                    }}
                  >
                    {e.extra}
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
          <Typography
            sx={{
              fontSize: { lg: "16px", xs: "14px", xxxs: "12px" },
              fontWeight: 700,
              fontFamily: "poppins",
              width: "100%",
              color: "secondary.dark_gray",
              mb: "12px",
              mt: "24px",
              ml: { xs: 0, xxxs: "5px" },
            }}
          >
            LEGAL
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "2px",
              background: "#D9D9D9",
              mb: "12px",
            }}
          ></Box>
          {legal.map((e) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                mb: "20px",
                borderBottom: { xs: "none", xxxs: "1px solid #494949" },
              }}
            >
              {mode === "dark" ? (
                <img src={e.src} className="know-icon" />
              ) : (
                <img src={e.darkSrc} className="know-icon" />
              )}
              <Box sx={{ width: "100%", ml: { sm: "8px", xxxs: "2px" } }}>
                <Typography
                  sx={{
                    fontSize: { lg: "14px", xs: "12px", xxxs: "10px" },
                    fontWeight: 700,
                    fontFamily: "poppins",
                    color: "secondary.dark_gray",
                  }}
                >
                  {e.name}
                </Typography>
                {e.extra && (
                  <Typography
                    sx={{
                      fontSize: { lg: "12px", xs: "10px", xxxs: "8px" },
                      fontWeight: 400,
                      fontFamily: "poppins",
                      color: "secondary.dark_gray",
                    }}
                  >
                    {e.extra}
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ width: { xs: "65%", xxxs: "75%" } }}>
          {openTag === "Over-Under Points System" && (
            <OverUnderPointSystem selectSports={selectSports} />
          )}
          {openTag === "Frequently Asked Questions" && <FAQ />}
          {openTag === "Sports Battle Operating States" && <OperatingState />}
        </Box>
      </Box>
    </Box>
  );
}
