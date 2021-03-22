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
  teamContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "320px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "250px",
    },
  },
  teamAvatar: {
    width: "180px",
    height: "180px",
    backgroundColor: "#F4F4F4",
    borderRadius: "25px",
    [theme.breakpoints.down("sm")]: {
      width: "160px",
      height: "160px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "140px",
      height: "140px",
    },
  },
  teamName: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    marginTop: "20px",
  },
  teamPosition: {
    fontFamily: "Montserrat",
    fontWeight: "light",
    marginTop: "20px",
  },
}));

export default useStyles;
