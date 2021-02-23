import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  consBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
      flexDirection: "column",
    },
  },
  box: {
    width: "auto",
    [theme.breakpoints.down("sm")]: {
      "&:nth-of-type(1)": {
        marginTop: theme.spacing(4),
      },
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
    },
  },
  descriptionText: {
    maxWidth: "250px",
    textAlign: "left",
  },
  boxPosition: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      margin: "0 auto",
      padding: "20px",
    },
  },
  illustrations: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  container: {
    maxWidth: "85%",
    margin: "0 auto",
  },
}));

export default useStyles;
