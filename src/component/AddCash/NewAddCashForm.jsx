import { Box } from "@mui/system";
import React, { useState } from "react";
import { Typography, Button, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./newAddCashForm.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FailVerify from "./FailVerify";
import { useSelector } from "react-redux";
import FailLocationPermission from "./FailLocationPermission";
import axios from "axios";
import { APIURLs } from "../../api/ApiUrls";
import { makePOSTAPICall } from "../../api/methods";
export default function NewAddCashFrom({ address, setNewUser, mode }) {
  const fs = useSelector((state) => state.user.fs);

  let navigate = useNavigate();
  const goDepositVerify = () => {
    navigate("/home?deposit=new&page=verify", { replace: true });
  };
  const goDepositAddress = () => {
    navigate("/home?deposit=new&page=address", { replace: true });
  };
  const goAddCashPage = () => {
    setTimeout(() => {
      navigate("/home?deposit=old-user", { replace: true });
    }, 2000);
  };

  const goSuccess = () => {
    setTimeout(() => {
      setSuccessOpen(true);
    }, 2000);
  };
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [dob, setDob] = useState(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [failOpen, setFailOpen] = useState(false);

  const [Lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [altitude, setAltitude] = useState(null);
  const [speed, setSpeed] = useState(null);
  const [locationBlock, setLocationBlock] = useState(false);
  let userDetailFromLocalStorage = JSON.parse(localStorage.getItem("user"));
  const getLocation = async () => {
    if (firstName && lastName && dob) {
      let locationObject = {};
      let userObject = {};
      setStartAnimation(true);
      const currTime = new Date();
      let deviceDateTime =
        currTime.toLocaleDateString().toString() +
        " " +
        currTime.toTimeString().toString();
      const res = await axios.get("https://geolocation-db.com/json/");
      // console.log(res.data);
      if (!res.data) {
        return;
      }
      let ipAddress = res.data.IPv4;
      let ipAddressCountry = res.data.country_code;
      // setIP(res.data.IPv4);
      if (!navigator.geolocation) {
        // Geolocation is not supported by your browser
      } else {
        // setStatus("Locating...");
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // setStatus(null);
            locationObject.latitude = position.coords.latitude;
            locationObject.longitude = position.coords.longitude;
            locationObject.altitude = 0;
            locationObject.speed = -1;
            // console.log(position.coords);
            // setLat(position.coords.latitude);
            // setLong(position.coords.longitude);
            // setAltitude(position.coords.altitude);
            // setSpeed(position.coords.speed);
            setStartAnimation(false);
            userObject.userId = userDetailFromLocalStorage.uid;
            userObject.email = userDetailFromLocalStorage.email;
            userObject.firstName = firstName;
            userObject.lastName = lastName;
            userObject.phoneNumber = "";
            userObject.dob = dob;
            // userObject.address =
            // console.log(address);
            userObject.address = {};
            userObject.address.address = address.address;
            console.log(locationObject);
            console.log(deviceDateTime);
            console.log(ipAddress);
            console.log(ipAddressCountry);
            console.log(userObject);
          },

          () => {
            // setStatus('Unable to retrieve your location');
            setLocationBlock(true);
            setStartAnimation(false);
          }
        );
      }
    }
  };

  return (
    <Box
      sx={{
        width: { lg: "800px", md: "700px", sm: "500px", xxxs: "80%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          mt: { sm: "13px", xxxs: "30px" },
          cursor: "pointer",
        }}
        onClick={goDepositVerify}
      >
        <ArrowBackIosIcon
          sx={{
            fontSize: { sm: fs.xxx_large, xxxs: fs.large },
            color: "secondary.dark_gray",
          }}
        />
        <Typography
          sx={{
            fontSize: { sm: fs.normal, xxxs: fs.small },
            fontWeight: 600,
            fontFamily: "poppins",
            color: "secondary.dark_gray",
          }}
        >
          Age Verification Setup
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", xxxs: "column" },
          alignItems: "center",
          justifyContent: { xs: "space-between", xxxs: "center" },
          width: "100%",
          mt: "32px",
          mb: "32px",
        }}
      >
        <Box
          sx={{
            width: { xs: "45%", xxxs: "100%" },
            mb: { xs: 0, xxxs: "32px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { sm: fs.small, xxxs: fs.xs },
              fontWeight: 600,
              fontFamily: "poppins",
              color: "secondary.dark_gray",
              mb: "12px",
            }}
          >
            First Name
          </Typography>
          <Input
            type="text"
            placeholder="Legal First Name"
            variant="outlined"
            sx={{
              color: "secondary.dark_gray",
              borderBottom: "1px solid #494949",
              width: "100%",
              pb: "7px",
              fontSize: { sm: fs.normal, xxxs: fs.small },
              fontWeight: 500,
              fontFamily: "poppins",
              outline: "none",
            }}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </Box>
        <Box sx={{ width: { xs: "45%", xxxs: "100%" } }}>
          <Typography
            sx={{
              fontSize: { sm: fs.small, xxxs: fs.xs },
              fontWeight: 600,
              fontFamily: "poppins",
              color: "secondary.dark_gray",
              mb: "12px",
            }}
          >
            Last Name
          </Typography>
          <Input
            type="text"
            placeholder="Legal First Name"
            variant="outlined"
            sx={{
              color: "secondary.dark_gray",
              borderBottom: "1px solid #494949",
              width: "100%",
              pb: "7px",
              fontSize: { sm: fs.normal, xxxs: fs.small },
              fontWeight: 500,
              fontFamily: "poppins",
              outline: "none",
            }}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Box>
      </Box>
      <Box sx={{ mb: "32px", width: "100%" }}>
        <Typography
          sx={{
            fontSize: { sm: fs.small, xxxs: fs.xs },
            fontWeight: 600,
            fontFamily: "poppins",
            color: "secondary.dark_gray",
            mb: "12px",
          }}
        >
          Date of Birth
        </Typography>
        <Input
          type="text"
          variant="outlined"
          placeholder="MM/DD/YYYY"
          onChange={(e) => {
            setDob(e.target.value);
          }}
          sx={{
            color: "secondary.dark_gray",
            borderBottom: "1px solid #494949",
            width: "100%",
            pb: "7px",
            fontSize: { sm: fs.normal, xxxs: fs.small },
            fontWeight: 500,
            fontFamily: "poppins",
            outline: "none",
            textTransform: "uppdercase",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: `${mode === "dark" ? "primary.light" : "#dbdbdb"}`,
          width: "100%",
          mb: "20px",
          cursor: "pointer",
        }}
        onClick={goDepositAddress}
      >
        <HomeIcon sx={{ width: "10%", color: "#4831D4" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "80%",
            py: "13px",
          }}
        >
          {!address && (
            <Typography
              sx={{
                fontSize: { sm: fs.small, xxxs: fs.xs },
                fontWeight: 600,
                fontFamily: "poppins",
                color: "secondary.dark_gray",
              }}
            >
              Address
            </Typography>
          )}
          <Typography
            sx={{
              fontSize: { sm: fs.xs, xxxs: fs.xxs },
              fontWeight: 300,
              fontFamily: "poppins",
              color: "secondary.dark_gray",
              mb: "12px",
              width: { md: "25%", xs: "40%", xxxs: "60%" },
            }}
          >
            {address
              ? address.address.abbreviation +
                " " +
                address.address.addrCity +
                " " +
                address.address.addrLine1 +
                " " +
                address.address.addrLine2 +
                " " +
                address.address.addrStat +
                ", " +
                address.address.addrZip
              : "Select your address"}
          </Typography>
        </Box>
        <ArrowForwardIosIcon
          sx={{ width: "10%", color: "secondary.dark_gray" }}
        />
      </Box>
      <Typography
        sx={{
          fontSize: { sm: fs.small, xxxs: fs.xs },
          fontWeight: 600,
          fontFamily: "poppins",
          color: "#E4313C",
          width: "100%",
        }}
      >
        Please enter your details as per your license or any form of legal
        document{" "}
      </Typography>
      {address && firstName && lastName && dob && (
        <Button
          sx={{
            background: "#4831D4",
            fontSize: { sm: fs.normal, xxxs: fs.small },
            fontWeight: 600,
            fontFamily: "poppins",
            px: { xs: "89px", xxxs: "70px" },
            height: "48px",
            color: "white",
            "&.MuiButtonBase-root:hover": {
              background: "#4831D4",
            },
            mt: "15px",
            textTransform: "none",
            borderRadius: "8px",
          }}
          onClick={() => {
            getLocation();
            // setStartAnimation(true);
            // goSuccess();
            // setNewUser(false);
          }}
        >
          {startAnimation ? (
            <div className="circleContainer">
              <div className="circle-one-address"></div>
              <div className="circle-two-address"></div>
              <div className="circle-three-address"></div>
            </div>
          ) : (
            "Verify"
          )}
        </Button>
      )}
      <Button
        sx={{
          border: "1px solid #439F48",
          fontSize: { sm: fs.small, xxxs: fs.xs },
          fontWeight: 500,
          fontFamily: "poppins",
          color: "#439F48",
          padding: { sm: "10px 51px", xxxs: "5px 27px" },
          mt: "32px",
          bgcolor: "primary.main",
          borderRadius: "8px",
        }}
      >
        Support Chat
      </Button>
      {successOpen && (
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            background: `${
              mode === "dark" ? "rgba(0,0,0,0.9)" : "rgba(115, 115, 115, 0.7)"
            }`,
            zIndex: "30",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { sm: "444px", xxxs: "90%" },
              bgcolor: "primary.dark",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
            <CheckCircleIcon
              sx={{
                color: "#52C03C",
                fontSize: { xs: "40px", xxxs: "30px" },
                mt: "32px",
              }}
            />
            <Typography
              sx={{
                color: "secondary.dark_gray",
                fontSize: { sm: fs.small, xxs: fs.xs, xxxs: fs.xxxs },
                fontWeight: 700,
                fontFamily: "poppins",
                mt: "16px",
              }}
            >
              Verification Succesfull
            </Typography>
            <Button
              sx={{
                background: "#4831D4",
                fontSize: { sm: fs.small, xxs: fs.xs, xxxs: fs.xxxs },
                fontFamily: "poppins",
                padding: { xs: "12px 89px", xxxs: "10px 70px" },
                color: "white",
                "&.MuiButtonBase-root:hover": {
                  background: "#4831D4",
                },
                mt: "24px",
                mb: "32px",
                textTransform: "none",
                fontWeight: "600",
              }}
              onClick={() => {
                goAddCashPage();
              }}
            >
              Add Cash
            </Button>
          </Box>
        </Box>
      )}
      {failOpen && <FailVerify mode={mode} />}
      {locationBlock && (
        <FailLocationPermission
          setLocationBlock={setLocationBlock}
          mode={mode}
        />
      )}
    </Box>
  );
}


//identity verify

export const addIdentityVerify = async (locationObject, deviceTime, ipAddress, ipAdressCountry, userObject) => {
  var apiUrl = APIURLs.addIdentityVerify;
  var reqBody = {
    location: locationObject,
    deviceDateTime: deviceTime,
    ipAddress: ipAddress,
    ipAddressCountry: ipAdressCountry,
    user: userObject
  };
  //console.log(apiUrl);
  const apiResponse = await makePOSTAPICall(apiUrl, reqBody);
  if (apiResponse.status === 200) {
    return apiResponse.data;
  } else {
    return {
      status: "failed",
      errorMsg: "Error occurred, Please try later.",
    };
  }
};