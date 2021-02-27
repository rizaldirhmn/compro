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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "65%",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(8),
    },
  },
  descriptionText: {
    marginTop: "20px",
    width: "600px",
    [theme.breakpoints.down("sm")]: {
      width: "fit-content",
    },
  },
}));

export default useStyles;
