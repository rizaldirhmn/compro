import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: "bold",
    fontFamily: "Montserrat",
    marginTop: theme.spacing(2),
  },
  description: {
    fontFamily: "Montserrat",
    [theme.breakpoints.down("sm")]: {
      fontWeight: 600,
      marginTop: theme.spacing(2),
    },
  },
  detailProjectSpacing: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(20),
    },
  },
  descriptionProjectText: {
    fontFamily: "Montserrat",
    color: "black",
    fontWeight: 500,
    textAlign: "justify",
  },
  visitWebsiteButton: {
    padding: "8px 24px",
  },
  title: {
    fontFamily: "Montserrat",
    fontWeight: 700,
  },
  spacingText: {
    marginTop: theme.spacing(4),
  },
  descriptionProject: {
    width: "100%",
    height: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(5),
      height: "100%",
    },
  },
  containerPict: {
    width: "100%",
    height: "100%",
  },
  pict: {
    zIndex: -1,
    position: "relative",
    left: "-300px",
    width: "900px",
    height: "520px",
    objectFit: "cover",
    [theme.breakpoints.up("xl")]: {
      left: "-360px",
    },
    [theme.breakpoints.down("sm")]: {
      position: "unset",
      left: 0,
      width: "70%",
      height: "auto",
      margin: "0 auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "auto",
    },
  },
}));

export default useStyles;
