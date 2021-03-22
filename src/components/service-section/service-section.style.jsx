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
      alignItems: "center",
      margin: "0 auto",
      padding: "20px",
    },
  },
  illustrations: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: theme.spacing(4),
    },
  },
  position: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "64px",
    },
  },
  spacing: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "30px",
      paddingRight: "30px",
    },
  },
}));

export default useStyles;
