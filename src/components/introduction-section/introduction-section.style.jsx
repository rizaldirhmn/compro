import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  introductions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(10),
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
    paddingLeft: "15px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "65%",
      paddingLeft: "15px",
      marginTop: theme.spacing(0),
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(8),
      marginBottom: theme.spacing(8),
    },
  },
  firstBox: {
    paddingLeft: "15px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "65%",
      paddingLeft: "15px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(8),
      marginLeft: theme.spacing(8),
      marginBottom: theme.spacing(8),
    },
  },
  lastBox: {
    paddingLeft: "15px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "65%",
      paddingLeft: "15px",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(8),
      marginBottom: theme.spacing(0),
    },
  },
  descriptionText: {
    marginTop: "20px",
    width: "fit-content",
    paddingRight: "80px",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0",
      width: "fit-content",
    },
  },
}));

export default useStyles;
