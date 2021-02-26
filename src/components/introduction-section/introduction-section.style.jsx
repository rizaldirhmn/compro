import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  introductions: {
    display: "flex",
    justifyContent: "space-between",
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
    paddingLeft: "10px",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(6),
    },
  },
  boxPosition: {
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      paddingLeft: "30px",
    },
  },
  descriptionText: {
    marginTop: "20px",
    width: "600px",
    [theme.breakpoints.down("sm")]: {
      width: "fit-content",
    },
  },
  container: {
    maxWidth: "85%",
    margin: "0 auto",
  },
}));

export default useStyles;
