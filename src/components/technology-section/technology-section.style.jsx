import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "85%",
    height: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:focus": {
      outline: "none",
      boxShadow: "none",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "flex-start",
    },
  },
  arrow: {
    width: "35px",
    height: "35px",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      width: "30px",
      height: "30px",
    },
  },
  cursor: {
    cursor: "pointer",
  },
  icon: {
    width: "150px",
    height: "150px",
    transition: "opacity 0.3s ease-in-out",
    "&:hover": {
      opacity: 0.7,
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100px",
      height: "100px",
    },
  },
}));

export default useStyles;
