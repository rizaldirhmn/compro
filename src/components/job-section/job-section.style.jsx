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
  jobContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
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
