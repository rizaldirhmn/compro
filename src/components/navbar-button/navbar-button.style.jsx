import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  buttonActive: {
    textTransform: "inherit",
    padding: "10px 50px",
    borderRadius: "12px",
    boxShadow: "none",
    backgroundColor: "#F4F4F4",
    border: "2px solid #16A1E0",
    color: "#8D8D8D",
    "&:hover": {
      backgroundColor: "#F4F4F4",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 5px",
    },
  },
  button: {
    textTransform: "inherit",
    padding: "10px 50px",
    borderRadius: "12px",
    boxShadow: "none",
    border: "2px solid transparent",
    backgroundColor: "#F4F4F4",
    color: "#8D8D8D",
    "&:hover": {
      backgroundColor: "#F4F4F4",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 5px",
    },
  },
}));

export default useStyles;
