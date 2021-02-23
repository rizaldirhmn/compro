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
  sendText: {
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
}));

export default useStyles;
