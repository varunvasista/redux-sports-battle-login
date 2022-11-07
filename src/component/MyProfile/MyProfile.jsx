import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./profile.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ProfileComplete from "./ProfileComplete";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import WidthDrawCash from "./WidthDrawCash";
import ChooseAWithDraw from "./ChooseAWithDraw";
import StandardECheck from "./StandardECheck";
import MyWithDraw from "./MyWithDraw";
import ReferalHistory from "./ReferalHistory";
import PaperECheck from "./PaperECheck";
import SelectAddressPaperCheck from "./SelectAddressPaperCheck";
import AddPhoneNumber from "./AddPhoneNumber";
import VerifycationCode from "./VerifycationCode";
import AccountSetup from "./AccountSetup";
import LoadingSpinnerEachSection from "../loadingSpinner/LoadingSpinnerEachSection";
import { useSelector } from "react-redux";
import { addPropsDataCommingFromApi } from "../../feature/userSlice";
export default function MyProfile({
  mode,
  myProfileOpen,
  goRefralBonusCashRadeem,
  transactionHistoryOpen,
  newUser,
  goDepositNewUser,
  goAddCashBonus,
}) {
  const fs = useSelector((state) => state.user.fs);
  const [wallet, setWallet] = useState([
    {
      name: "Total Won Cash",
      amount: "$0",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate amet aliquet ",
    },
    {
      name: "Total Unused Cash",
      amount: "$0",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate amet aliquet ",
    },
    {
      name: "Contest Bonus Cash",
      amount: "$0",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate amet aliquet ",
    },
    {
      name: "O/U & P/B Bonus",
      amount: "$0",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate amet aliquet ",
    },
  ]);
  const openWidthDrawCash = () => {
    setOpenTag("WidthDrawCash");
  };
  const openMyWithDraw = () => {
    setOpenTag("myWithDraw");
  };

  const goDeposit = () => {
    if (newUser) {
      goDepositNewUser();
    } else {
      goAddCashBonus();
    }
  };
  const [info, setInfo] = useState([
    {
      name: "Deposit",
      note: "Credit Card (Visa, Master, Discover)",
      icon: "/upload1.png",
      func: goDeposit,
    },
    {
      name: "Withdraw Cash",
      note: "Credit Card (Visa, Master, Discover)",
      func: openWidthDrawCash,
      icon: "/deposit1.png",
    },
    {
      name: "My Withdrawals",
      note: "Credit Card (Visa, Master, Discover)",
      func: openMyWithDraw,
      icon: "/withdrawal1.png",
    },
    {
      name: "Transaction History",
      note: "",
      icon: "/transcationHistoryActive.png",
      func: transactionHistoryOpen,
    },
  ]);
  const [history, setHistory] = useState([
    {
      firstAmount: "0",
      firstCondition: "Over-Under",
      firstWin: "Wins",
      secondAmount: "$50",
      secondCondition: "Over-Under",
      secondWin: "Wins",
    },
    {
      firstAmount: "0",
      firstCondition: "Over-Under",
      firstWin: "Wins",
      secondAmount: "$50",
      secondCondition: "Over-Under",
      secondWin: "Wins",
    },
  ]);
  const [openTag, setOpenTag] = useState("profile");
  const [alreadyChooseWidthDraw, setAlreadyChooseWidthDraw] = useState(null);
  const [openReferalHistory, setOpenReferalHistory] = useState(false);

  const [address, setAddress] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [verify, setVerify] = useState(false);

  const user = useSelector((state) => state.user.user);
  const myAccountDataCommingFromApi = useSelector(
    (state) => state.user.myAccountDataCommingFromApi
  );

  const [completePercent, setCompletePercent] = useState(0);
  useEffect(() => {
    if (myAccountDataCommingFromApi) {
      setPhoneNumber(null);
      let deposit = myAccountDataCommingFromApi.firstDeposit;
      let phone = myAccountDataCommingFromApi.phoneNumberVerified;
      let account =
        myAccountDataCommingFromApi.dobQuestion &&
        myAccountDataCommingFromApi.idpVerified;
      setVerify(false);
      if (phone) {
        setPhoneNumber(myAccountDataCommingFromApi.phoneNumber);
      }
      if (deposit && phone && account) {
        setCompletePercent(100);
        setVerify(true);
      } else if (deposit && phone) {
        setCompletePercent(80);
      } else if (deposit && account) {
        setCompletePercent(80);
      } else if (phone && account) {
        setCompletePercent(80);
      } else if (deposit) {
        setCompletePercent(40);
      } else if (phone) {
        setCompletePercent(40);
      } else if (account) {
        setCompletePercent(40);
      } else {
        setCompletePercent(0);
      }
    }
  }, [myAccountDataCommingFromApi]);

  if (openTag === "WidthDrawCash") {
    return (
      <WidthDrawCash
        setOpenTag={setOpenTag}
        alreadyChooseWidthDraw={alreadyChooseWidthDraw}
        mode={mode}
      />
    );
  } else if (openTag === "chooseAWithdrawMethod") {
    return <ChooseAWithDraw setOpenTag={setOpenTag} />;
  } else if (openTag === "standardECheck") {
    return (
      <StandardECheck
        setOpenTag={setOpenTag}
        setAlreadyChooseWidthDraw={setAlreadyChooseWidthDraw}
      />
    );
  } else if (openTag === "paperECheck") {
    return (
      <PaperECheck
        setOpenTag={setOpenTag}
        setAlreadyChooseWidthDraw={setAlreadyChooseWidthDraw}
        address={address}
        setAddress={setAddress}
      />
    );
  } else if (openTag === "select-address-paper-check") {
    return (
      <SelectAddressPaperCheck
        setOpenTag={setOpenTag}
        setAddress={setAddress}
      />
    );
  } else if (openTag === "myWithDraw") {
    return <MyWithDraw mode={mode} />;
  } else if (openTag === "add-phone-number") {
    return (
      <AddPhoneNumber
        setOpenTag={setOpenTag}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
    );
  } else if (openTag === "verifycation-code") {
    return (
      <VerifycationCode
        phoneNumber={phoneNumber}
        setVerify={setVerify}
        setOpenTag={setOpenTag}
      />
    );
  } else if (openTag === "account-setup") {
    return (
      <AccountSetup
        setOpenTag={setOpenTag}
        myAccountDataCommingFromApi={myAccountDataCommingFromApi}
      />
    );
  } else {
    return (
      <>
        {myAccountDataCommingFromApi ? (
          <Box
            sx={{
              width: {
                xl: "1000px",
                lg: "836px",
                md: "700px",
                sm: "560px",
                xs: "450px",
                xxxs: "90%",
              },
              height: "100vh",
              margin: "auto",
              mb: "30px",
            }}
            component="div"
          >
            {!verify && (
              <ProfileComplete
                setOpenTag={setOpenTag}
                myAccountDataCommingFromApi={myAccountDataCommingFromApi}
                completePercent={completePercent}
              />
            )}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                background: `${
                  mode === "dark" ? "rgba(217, 217, 217,0.2)" : "white"
                }`,
                py: "11px",
                mt: "21px",
                borderRadius: "4px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  ml: { xs: "21px", xxxs: "10px" },
                }}
              >
                <Typography
                  sx={{
                    width: { xs: "64px", xxxs: "35px" },
                    height: { xs: "64px", xxxs: "35px" },
                    background: "#439F48",
                    borderRadius: "50%",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {user && user.firstNameLetter}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    ml: { xs: "21px", xxxs: "10px" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { sm: fs.small, xs: fs.xs, xxxs: fs.xxs },
                      fontWeight: 700,
                      fontFamily: "poppins",
                      color: "secondary.main",
                    }}
                  >
                    {user && user.username}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { sm: fs.small, xs: fs.xs, xxxs: fs.xxs },
                      fontWeight: 500,
                      fontFamily: "poppins",
                      color: "secondary.main",
                      mt: "2px",
                    }}
                  >
                    {user && user.username.split(" ").join("").toLowerCase()}
                  </Typography>
                </Box>
              </Box>
              <Button
                sx={{
                  color: "white",
                  fontSize: { sm: fs.xs, xs: fs.xxs, xxxs: fs.xxxs },
                  fontWeight: 500,
                  fontFamily: "poppins",
                  padding: "7px 24px",
                  background: "#4831D4",
                  mr: { xs: "35px", xxxs: "10px" },
                  "&.MuiButtonBase-root:hover": {
                    background: "#4831D4",
                  },
                  textTransform: "none",
                }}
                onClick={goDepositNewUser}
              >
                Add Cash
              </Button>
            </Box>
            <Box
              sx={{
                width: "95%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                py: "11px",
                margin: "0 auto",
                mb: "16px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { sm: fs.small, xs: fs.xs, xxxs: fs.xxs },
                    fontWeight: 500,
                    fontFamily: "poppins",
                    color: "secondary.dark_gray",
                  }}
                >
                  Email{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { sm: fs.small, xs: fs.xs, xxxs: fs.xxs },
                    fontWeight: 500,
                    fontFamily: "poppins",
                    color: "secondary.dark_gray",
                    mt: "11px",
                  }}
                >
                  {user && user.email}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  ml: "21px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { sm: fs.small, xs: fs.xs, xxxs: fs.xxs },
                    fontWeight: 500,
                    fontFamily: "poppins",
                    color: "secondary.dark_gray",
                    mb: "5px",
                  }}
                >
                  Phone Number{" "}
                </Typography>
                {phoneNumber ? (
                  <Typography
                    sx={{
                      fontSize: { sm: fs.small, xs: fs.xs, xxxs: fs.xxs },
                      fontWeight: 500,
                      fontFamily: "poppins",
                      color: "secondary.dark_gray",
                      mt: "11px",
                    }}
                  >
                    {phoneNumber}
                  </Typography>
                ) : (
                  <Button
                    sx={{
                      color: "white",
                      fontSize: { sm: fs.xs, xs: fs.xxs, xxxs: fs.xxxs },
                      fontWeight: 500,
                      fontFamily: "poppins",
                      background: "#4831D4",
                      padding: { xs: "7px 24px", xxxs: "5px 10px" },
                      "&.MuiButtonBase-root:hover": {
                        background: "#4831D4",
                      },
                      textTransform: "none",
                    }}
                    onClick={() => setOpenTag("add-phone-number")}
                  >
                    Add Phone Number{" "}
                  </Button>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                background: `${
                  mode === "dark" ? "rgba(217, 217, 217,0.2)" : "#d9d9d9"
                }`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "4px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { sm: fs.normal, xs: fs.small, xxxs: fs.xs },
                  fontWeight: 700,
                  fontFamily: "poppins",
                  color: "secondary.dark_gray",
                  width: "100%",
                  mt: "9px",
                  mb: "12px",
                  width: "95%",
                }}
              >
                Wallet{" "}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  bgcolor: "primary.main",
                  width: "95%",
                  py: "19px",
                  borderRadius: "4px",
                  mb: "8px",
                  position: "relative",
                }}
              >
                <img src="/winning.png" className="winningImage" />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { sm: fs.small, xs: fs.xs, xxxs: fs.xxs },
                      fontWeight: 700,
                      fontFamily: "poppins",
                      color: "secondary.dark_gray",
                    }}
                  >
                    Your Winnings{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { sm: fs.xxs, xs: fs.xxxs, xxxs: "6px" },
                      fontWeight: 400,
                      fontFamily: "poppins",
                      color: "secondary.dark_gray",
                      mt: "4px",
                      maxWidth: "485px",
                    }}
                  >
                    Withdraw eligible cash. If unused cash is not available,
                    cash from here is used to join game plays
                  </Typography>
                </Box>
                <Box sx={{ position: "absolute", right: "50px" }}>
                  <Typography
                    sx={{
                      fontSize: { sm: fs.large, xs: fs.normal, xxxs: fs.small },
                      fontWeight: 700,
                      fontFamily: "poppins",
                      color: "#459F48",
                    }}
                  >
                    ${myAccountDataCommingFromApi.ouWonAmount}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  bgcolor: "transparent",
                  width: "95%",
                  py: "10px",
                  borderRadius: "4px",
                  mb: "8px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    borderRadius: "4px",
                    fontSize: { sm: fs.normal, xs: fs.small, xxxs: fs.xs },
                    fontWeight: 700,
                    fontFamily: "poppins",
                  }}
                >
                  Total Available Cash
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    borderRadius: "4px",
                    fontSize: { sm: fs.normal, xs: fs.small, xxxs: fs.xs },
                    fontWeight: 700,
                    fontFamily: "poppins",
                  }}
                >
                  $
                  {Number(myAccountDataCommingFromApi.numCash) +
                    Number(myAccountDataCommingFromApi.unutilizedCash)}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "95%",
                  mb: "19px",
                  flexWrap: "wrap",
                }}
              >
                {/* {wallet.map((e, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: { xs: "24%", xxxs: "48%" },
                      bgcolor: "primary.main",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: "4px",
                      mt: { xs: 0, xxxs: "5px" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { sm: "12px", xs: "10px", xxxs: "8px" },
                        fontWeight: 600,
                        fontFamily: "poppins",
                        color: "secondary.dark_gray",
                        mt: "27px",
                        mb: "16px",
                      }}
                    >
                      {e.name}{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { sm: "30px", xs: "28px", xxxs: "26px" },
                        fontWeight: 700,
                        fontFamily: "poppins",
                        color: "secondary.dark_gray",
                        mb: "16px",
                      }}
                    >
                      {e.amount}{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { sm: "10px", xs: "8px", xxxs: "6px" },
                        fontWeight: 400,
                        fontFamily: "poppins",
                        color: "secondary.dark_gray",
                        mb: "26px",
                        maxWidth: "90%",

                        textAlign: "center",
                      }}
                    >
                      {e.paragraph}
                    </Typography>
                  </Box>
                ))} */}
                <Box
                  sx={{
                    width: { xs: "28%", xxxs: "65%" },
                    height: "195px",
                    bgcolor: "primary.main",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "4px",
                    mt: { xs: 0, xxxs: "5px" },
                    ml: "10px",
                    mr: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { sm: fs.xs, xs: fs.xxs, xxxs: fs.xxxs },
                      fontWeight: 600,
                      fontFamily: "poppins",
                      color: "secondary.dark_gray",
                      mt: "27px",
                      mb: "16px",
                    }}
                  >
                    Total Won Cash
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { sm: "30px", xs: "28px", xxxs: "26px" },
                      fontWeight: 700,
                      fontFamily: "poppins",
                      color: "secondary.dark_gray",
                      mb: "16px",
                    }}
                  >
                    ${myAccountDataCommingFromApi.numCash}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { sm: fs.xxs, xs: fs.xxxs, xxxs: "6px" },
                      fontWeight: 400,
                      fontFamily: "poppins",
                      color: "secondary.dark_gray",
                      mb: "26px",
                      maxWidth: "90%",

                      textAlign: "center",
                    }}
                  >
                    Cash won that is withdraw eligible.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: { xs: "28%", xxxs: "65%" },
                    height: "195px",
                    bgcolor: "primary.main",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "4px",
                    mt: { xs: 0, xxxs: "5px" },
                    ml: "10px",
                    mr: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { sm: fs.xs, xs: fs.xxs, xxxs: fs.xxxs },
                      fontWeight: 600,
                      fontFamily: "poppins",
                      color: "secondary.dark_gray",
                      mt: "27px",
                      mb: "16px",
                    }}
                  >
                    Total Unused Cash
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { sm: "30px", xs: "28px", xxxs: "26px" },
                      fontWeight: 700,
                      fontFamily: "poppins",
                      color: "secondary.dark_gray",
                      mb: "16px",
                    }}
                  >
                    ${myAccountDataCommingFromApi.unutilizedCash}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { sm: fs.xxs, xs: fs.xxxs, xxxs: "6px" },
                      fontWeight: 400,
                      fontFamily: "poppins",
                      color: "secondary.dark_gray",
                      mb: "26px",
                      maxWidth: "90%",

                      textAlign: "center",
                    }}
                  >
                    Cash deposited that is yet to be used to play.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: { xs: "28%", xxxs: "65%" },
                    height: "195px",
                    bgcolor: "primary.main",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "4px",
                    mt: { xs: 0, xxxs: "5px" },
                    ml: "10px",
                    mr: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { sm: fs.xs, xs: fs.xxs, xxxs: fs.xxxs },
                      fontWeight: 600,
                      fontFamily: "poppins",
                      color: "secondary.dark_gray",
                      mt: "27px",
                      mb: "16px",
                    }}
                  >
                    O/U & P/B Bonus
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { sm: "30px", xs: "28px", xxxs: "26px" },
                      fontWeight: 700,
                      fontFamily: "poppins",
                      color: "secondary.dark_gray",
                      mb: "16px",
                    }}
                  >
                    ${myAccountDataCommingFromApi.numOUBonusCash}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { sm: fs.xs, xs: fs.xxs, xxxs: fs.xxxs },
                      fontWeight: 400,
                      fontFamily: "poppins",
                      color: "secondary.dark_gray",
                      mb: "26px",
                      maxWidth: "90%",

                      textAlign: "center",
                    }}
                  >
                    Cash that can be used 100% for over-under & player-battle.
                    Cannot be withdrawn.
                  </Typography>
                </Box>
              </Box>
            </Box>
            {info.map((e, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "0 auto",
                  borderBottom: "1px solid #494949",
                  cursor: "pointer",
                  py: "4px",
                }}
                onClick={e.func}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    ml: "10px",
                  }}
                >
                  <img src={e.icon} className="depositIcon" />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      ml: "24px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { sm: fs.small, xs: fs.xs, xxxs: fs.xxs },
                        fontWeight: 400,
                        fontFamily: "poppins",
                        color: "secondary.dark_gray",
                        mt: "12px",
                        mb: "4px",
                      }}
                    >
                      {e.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { sm: fs.xs, xs: fs.xxs, xxxs: fs.xxxs },
                        fontWeight: 400,
                        fontFamily: "poppins",
                        color: "secondary.dark_gray",
                        mb: "9px",
                      }}
                    >
                      {e.note}
                    </Typography>
                  </Box>
                </Box>
                <ArrowForwardIosIcon
                  sx={{
                    color: "secondary.dark_gray",
                    fontSize: { sm: fs.large, xs: fs.normal, xxxs: fs.small },
                    mr: "10px",
                  }}
                />
              </Box>
            ))}
            <Box
              sx={{
                width: "100%",
                background: `${
                  mode === "dark"
                    ? "rgba(217, 217, 217,0.2)"
                    : "rgba(217, 217, 217,0.9)"
                }`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: "10px",
                borderRadius: "4px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { sm: fs.normal, xs: fs.small, xxxs: fs.xs },
                  fontWeight: 700,
                  fontFamily: "poppins",
                  color: "secondary.dark_gray",
                  width: "100%",
                  mt: "26px",
                  mb: "12px",
                  width: "95%",
                }}
              >
                Props History{" "}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "row", xxxs: "column" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "95%",
                  mb: "26px",
                  flexWrap: "wrap",
                }}
              >
                {/* {history.map((e, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: { xs: "48%", xxxs: "90%" },
                      bgcolor: "primary.main",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      borderRadius: "4px",
                      py: "5px",
                      mt: { xs: 0, xxxs: "5px" },
                    }}
                  >
                    <Box
                      sx={{
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { sm: "20px", xs: "18px", xxxs: "16px" },
                          fontWeight: 700,
                          fontFamily: "poppins",
                          color: "secondary.dark_gray",
                          mt: "14px",
                        }}
                      >
                        {myAccountDataCommingFromApi.numOUWin}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { sm: "10px", xs: "8px", xxxs: "6px" },
                          fontWeight: 400,
                          fontFamily: "poppins",
                          color: "secondary.dark_gray",
                          mb: "4px",
                          maxWidth: "90%",
                          mt: "4px",
                          color: "secondary.dark_gray",

                          textAlign: "center",
                        }}
                      >
                        Over-Under
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { sm: "12px", xs: "10px", xxxs: "8px" },
                          fontWeight: 600,
                          fontFamily: "poppins",
                          color: "secondary.dark_gray",
                          mb: "13px",
                        }}
                      >
                        Wins
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderLeft: `${
                          mode === "dark"
                            ? "1px solid #494949"
                            : "1px solid #dbdbdb"
                        }`,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { sm: "20px", xs: "18px", xxxs: "16px" },
                          fontWeight: 700,
                          fontFamily: "poppins",
                          color: "#459F48",
                          mt: "14px",
                        }}
                      >
                        ${myAccountDataCommingFromApi.ouWonAmount}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { sm: "10px", xs: "8px", xxxs: "6px" },
                          fontWeight: 400,
                          fontFamily: "poppins",
                          color: "secondary.dark_gray",
                          mb: "4px",
                          maxWidth: "90%",
                          mt: "4px",

                          textAlign: "center",
                        }}
                      >
                        Over-Under
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { sm: "12px", xs: "10px", xxxs: "8px" },
                          fontWeight: 600,
                          fontFamily: "poppins",
                          color: "secondary.dark_gray",
                          mb: "13px",
                        }}
                      >
                        Wins
                      </Typography>
                    </Box>
                  </Box>
                ))} */}
                <Box
                  sx={{
                    width: { xs: "48%", xxxs: "90%" },
                    bgcolor: "primary.main",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: "4px",
                    py: "5px",
                    mt: { xs: 0, xxxs: "5px" },
                  }}
                >
                  <Box
                    sx={{
                      width: "50%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          sm: fs.x_large,
                          xs: fs.large,
                          xxxs: fs.normal,
                        },
                        fontWeight: 700,
                        fontFamily: "poppins",
                        color: "secondary.dark_gray",
                        mt: "14px",
                      }}
                    >
                      {myAccountDataCommingFromApi.numOUWin}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { sm: fs.xxs, xs: fs.xxxs, xxxs: "6px" },
                        fontWeight: 400,
                        fontFamily: "poppins",
                        color: "secondary.dark_gray",
                        mb: "4px",
                        maxWidth: "90%",
                        mt: "4px",
                        color: "secondary.dark_gray",

                        textAlign: "center",
                      }}
                    >
                      Over-Under
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { sm: fs.xs, xs: fs.xxs, xxxs: fs.xxxs },
                        fontWeight: 600,
                        fontFamily: "poppins",
                        color: "secondary.dark_gray",
                        mb: "13px",
                      }}
                    >
                      Wins
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "50%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      borderLeft: `${
                        mode === "dark"
                          ? "1px solid #494949"
                          : "1px solid #dbdbdb"
                      }`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          sm: fs.x_large,
                          xs: fs.large,
                          xxxs: fs.normal,
                        },
                        fontWeight: 700,
                        fontFamily: "poppins",
                        color: "#459F48",
                        mt: "14px",
                      }}
                    >
                      ${myAccountDataCommingFromApi.ouWonAmount}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { sm: fs.xxs, xs: fs.xxxs, xxxs: "6px" },
                        fontWeight: 400,
                        fontFamily: "poppins",
                        color: "secondary.dark_gray",
                        mb: "4px",
                        maxWidth: "90%",
                        mt: "4px",

                        textAlign: "center",
                      }}
                    >
                      Over-Under
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { sm: fs.xs, xs: fs.xxs, xxxs: fs.xxxs },
                        fontWeight: 600,
                        fontFamily: "poppins",
                        color: "secondary.dark_gray",
                        mb: "13px",
                      }}
                    >
                      Wins
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: { xs: "48%", xxxs: "90%" },
                    bgcolor: "primary.main",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: "4px",
                    py: "5px",
                    mt: { xs: 0, xxxs: "5px" },
                  }}
                >
                  <Box
                    sx={{
                      width: "50%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          sm: fs.x_large,
                          xs: fs.large,
                          xxxs: fs.normal,
                        },
                        fontWeight: 700,
                        fontFamily: "poppins",
                        color: "secondary.dark_gray",
                        mt: "14px",
                      }}
                    >
                      {myAccountDataCommingFromApi.numWins}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { sm: fs.xxs, xs: fs.xxxs, xxxs: "6px" },
                        fontWeight: 400,
                        fontFamily: "poppins",
                        color: "secondary.dark_gray",
                        mb: "4px",
                        maxWidth: "90%",
                        mt: "4px",
                        color: "secondary.dark_gray",

                        textAlign: "center",
                      }}
                    >
                      Player-Battle
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { sm: fs.xs, xs: fs.xxs, xxxs: fs.xxxs },
                        fontWeight: 600,
                        fontFamily: "poppins",
                        color: "secondary.dark_gray",
                        mb: "13px",
                      }}
                    >
                      Wins
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "50%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      borderLeft: `${
                        mode === "dark"
                          ? "1px solid #494949"
                          : "1px solid #dbdbdb"
                      }`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          sm: fs.x_large,
                          xs: fs.large,
                          xxxs: fs.normal,
                        },
                        fontWeight: 700,
                        fontFamily: "poppins",
                        color: "#459F48",
                        mt: "14px",
                      }}
                    >
                      ${myAccountDataCommingFromApi.pbWonAmount}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { sm: fs.xxs, xs: fs.xxxs, xxxs: "6px" },
                        fontWeight: 400,
                        fontFamily: "poppins",
                        color: "secondary.dark_gray",
                        mb: "4px",
                        maxWidth: "90%",
                        mt: "4px",

                        textAlign: "center",
                      }}
                    >
                      Player-Battle
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { sm: fs.xs, xs: fs.xxs, xxxs: fs.xxxs },
                        fontWeight: 600,
                        fontFamily: "poppins",
                        color: "secondary.dark_gray",
                        mb: "13px",
                      }}
                    >
                      Wins
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontSize: { sm: fs.normal, xs: fs.small, xxxs: fs.xs },
                  fontWeight: 700,
                  fontFamily: "poppins",
                  color: "secondary.dark_gray",
                  width: "100%",
                  mb: "10px",
                  width: "95%",
                }}
              >
                Invite{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "0 auto",
                borderBottom: "1px solid #494949",
                mt: "26px",
                pb: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img src="/dollar.png" className="dollarImg" />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    ml: { xs: "10px", xxxs: "5px" },
                    maxWidth: "80%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { sm: fs.small, xs: fs.xs, xxxs: fs.xxs },
                      fontWeight: 400,
                      fontFamily: "poppins",
                      color: "secondary.dark_gray",
                      mt: "12px",
                      mb: "4px",
                    }}
                  >
                    Invite your friends and earn $5 cash when they join, Share
                    the below referral code with your friends{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        sm: fs.xxx_large,
                        xs: fs.xx_large,
                        xxxs: fs.x_large,
                      },
                      fontWeight: 700,
                      fontFamily: "poppins",
                      color: "secondary.dark_gray",
                    }}
                  >
                    {myAccountDataCommingFromApi.referralCode}
                  </Typography>
                </Box>
              </Box>

              <ArrowForwardIosIcon
                sx={{
                  color: "secondary.dark_gray",
                  fontSize: { sm: fs.large, xs: fs.normal, xxxs: fs.small },
                  mr: "10px",
                }}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #494949",
                margin: "0 auto",
                mt: "13px",
                pb: "9px",
                cursor: "pointer",
              }}
              onClick={() => setOpenReferalHistory(true)}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img src="/group.png" className="groupImage" />
                <Typography
                  sx={{
                    fontSize: { sm: fs.small, xs: fs.xs, xxxs: fs.xxs },
                    fontWeight: 400,
                    fontFamily: "poppins",
                    color: "secondary.dark_gray",
                    ml: { xs: "37px", xxxs: "10px" },
                  }}
                >
                  Referral History
                </Typography>
              </Box>
              <ArrowForwardIosIcon
                sx={{
                  color: "secondary.dark_gray",
                  fontSize: { sm: fs.large, xs: fs.normal, xxxs: fs.small },
                  mr: "10px",
                }}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #494949",
                margin: "0 auto",
                mt: "13px",
                pb: "9px",
                cursor: "pointer",
              }}
              onClick={goRefralBonusCashRadeem}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img src="/gift.png" className="groupImage" />
                <Typography
                  sx={{
                    fontSize: { sm: fs.small, xs: fs.xs, xxxs: fs.xxs },
                    fontWeight: 400,
                    fontFamily: "poppins",
                    color: "secondary.dark_gray",
                    ml: { xs: "37px", xxxs: "10px" },
                  }}
                >
                  Redeem Referral Code{" "}
                </Typography>
              </Box>
              <ArrowForwardIosIcon
                sx={{
                  color: "secondary.dark_gray",
                  fontSize: { sm: fs.large, xs: fs.normal, xxxs: fs.small },
                  mr: "10px",
                }}
              />
            </Box>
            <Box sx={{ mt: "50px", width: "100%", height: "1px" }}></Box>
            {openReferalHistory && (
              <ReferalHistory
                setOpenReferalHistory={setOpenReferalHistory}
                mode={mode}
              />
            )}
          </Box>
        ) : (
          <LoadingSpinnerEachSection />
        )}
      </>
    );
  }
}
