import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "85%",
    height: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "flex-start",
    },
  },
  cursor: {
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
  image: {
    width: "170px",
    height: "170px",
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
  arrow: {
    width: "35px",
    height: "35px",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      width: "30px",
      height: "30px",
    },
  },
}));

export default useStyles;
