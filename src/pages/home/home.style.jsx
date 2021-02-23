import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(22, 161, 224, 0.7)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "850px",
    },
  },
  header: {
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Poppins",
    [theme.breakpoints.down("sm")]: {
      marginTop: "60px",
    },
  },
  "@keyframes myEffect": {
    "0%": { bottom: "15px", top: "15px" },
    "25%": { bottom: "5px", top: "5px" },
    "50%": { bottom: "15px", top: "15px" },
    "75%": { bottom: "5px", top: "5px" },
    "100%": { bottom: "15px", top: "15px" },
  },
  body: {
    fontSize: "14px",
    lineHeight: "40px",
    color: "#fff",
    fontFamily: "Poppins",
    marginTop: "40px",
  },
  introductions: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  circle: {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    backgroundColor: "#E1F6FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: "30px",
    height: "30px",
    color: theme.palette.primary.main,
  },
  text: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  box: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      "&:nth-of-type(1)": {
        marginTop: theme.spacing(4),
      },
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
    },
  },
  boxPosition: {
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  container: {
    maxWidth: "85%",
    height: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    boxShadow: "none",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "25px",
    marginBottom: "30px",
  },
  sloganText: {
    fontFamily: "Montserrat",
    fontWeight: 600,
    color: "#fff",
    lineHeight: "50px",
  },
  marketingIllustration: {
    position: "relative",
    animation: "$myEffect 3s linear 3s infinite",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto",
    },
  },
  jumbotronIllustration: {
    position: "relative",
    animation: "$myEffect 3s linear 3s infinite",
    [theme.breakpoints.down("sm")]: {
      marginTop: "4rem",
      width: "100%",
      height: "auto",
    },
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0px 40px",
    padding: "20px 30px",
    [theme.breakpoints.down("sm")]: {
      padding: "40px 30px",
      margin: "0 15px",
      flexDirection: "column",
    },
  },
  sloganContainer: {
    width: "45%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  image: {
    position: "relative",
    width: "100%",
    height: "100vh",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "850px",
      objectFit: "cover",
    },
  },
}));

export default useStyles;
