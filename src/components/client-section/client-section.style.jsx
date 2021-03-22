import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  cursor: {
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
  image: {
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
