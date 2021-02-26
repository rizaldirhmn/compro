import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  containedButton: {
    textTransform: "inherit",
    color: "#fff",
    padding: "10px 35px",
    borderRadius: "20px",
    boxShadow: "none",
    background: theme.palette.primary.main,
    "&:hover": {
      background: "#0e99da",
    },
    fontFamily: "Poppins",
    [theme.breakpoints.down("xs")]: {
      margin: "0 5px",
    },
  },
  outlinedButton: {
    textTransform: "inherit",
    color: theme.palette.primary.main,
    padding: "9px 35px",
    borderRadius: "20px",
    boxSahdow: "none",
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      background: "#e2f2fa",
    },
    fontFamily: "Poppins",
    [theme.breakpoints.down("xs")]: {
      margin: "0 5px",
    },
  },
}));

export default useStyles;
