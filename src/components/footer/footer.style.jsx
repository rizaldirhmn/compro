import { makeStyles } from "@material-ui/styles";
import image from "../../assets/images/footer-image.png";

const useStyles = makeStyles((theme) => ({
  subText: {
    display: "flex",
    flexDirection: "column",
  },
  footerPaper: {
    position: "relative",
    marginTop: "30px",
    boxShadow: "none",
    backgroundImage: `url(${image})`,
  },
  footerText: {
    color: "#fff",
    fontFamily: "Montserrat",
    fontSize: 14,
    maxWidth: "260px",
  },
  footerSpace: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  footerItems: {
    [theme.breakpoints.down("sm")]: {
      "&:nth-of-type(1)": {
        marginTop: "0",
      },
      marginTop: "40px",
    },
  },
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(22, 161, 224, 0.95)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
  },
  footerIcon: {
    position: "relative",
    zIndex: 200,
    width: "30px",
    height: "auto",
    color: "#fff",
    "&:hover": {
      cursor: "pointer",
      color: "#E1F6FF",
      transition: "0.3s all ease-out",
    },
  },
  footerTextHeader: {
    fontFamily: "Montserrat",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
  },
  footerTextCopyright: {
    color: "#fff",
    fontFamily: "Montserrat",
    fontSize: 12,
  },
  footerCopyright: {
    zIndex: 66,
    backgroundColor: theme.palette.primary.main,
    marginTop: 4,
    position: "relative",
    textAlign: "center",
  },
  footerLogoEOA: {
    width: "100px",
    height: "auto",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "40%",
      height: "auto",
    },
  },
}));

export default useStyles;
