import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: "Montserrat",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13.5px",
    },
  },
  textAlignLeft: {
    fontFamily: "Montserrat",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13.5px",
    },
  },
}));

export default useStyles;
