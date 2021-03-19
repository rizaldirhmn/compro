import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: "Montserrat",
    fontSize: "22px",
    color: "black",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
}));

export default useStyles;
