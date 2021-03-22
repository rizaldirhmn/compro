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
  jobContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "30px",
    height: "320px",
    [theme.breakpoints.down("xs")]: {
      height: "250px",
    },
  },
  teamAvatar: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "auto",
    },
  },
  teamName: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    textAlign: "center",
  },
}));

export default useStyles;
