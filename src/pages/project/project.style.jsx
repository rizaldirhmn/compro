import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "88%",
    margin: "0 auto",
  },
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
  title: {
    fontFamily: "Montserrat",
    fontWeight: 700,
  },
  category: {
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: 13,
    marginLeft: "15px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  flex: {
    display: "flex",
    flexDirection: "column",
    width: "250px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: "170px",
      width: "100%",
    },
  },
  pict: {
    width: "auto",
    height: "300px",
    background: "linear-gradient(to bottom, #F4F4F4, transparent)",
    borderRadius: "10px 10px 0px 0px",
    [theme.breakpoints.down("xs")]: {
      width: "260px",
      height: "140px",
      borderRadius: "25px",
    },
  },
  space: {
    padding: "35px",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "170px",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 0 30px 35px",
      justifyContent: "space-between",
    },
  },
  circle: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "#C4C4C4",
    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
  },
  footerSpace: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));

export default useStyles;
