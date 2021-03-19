import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: "inherit",
    borderRadius: "12px",
    boxShadow: "none",
    padding: "8px 20px",
    fontFamily: "Montserrat",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    fontWeight: 400,
    fontSize: "14px",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.down("xs")]: {
      padding: "7px 20px",
      borderRadius: "25px",
      fontSize: "12px",
    },
  },
  detailProjectButton: {
    textTransform: "inherit",
    borderRadius: "12px",
    fontFamily: "Montserrat",
    boxShadow: "none",
    width: "fit-content",
    padding: "10px 42px",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    fontWeight: 400,
    fontSize: "14px",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
}));

export default useStyles;
