import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "924px",
    backgroundColor: "rgba(22, 161, 224, 0.7)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "850px",
    },
  },
  image: {
    width: "100%",
    height: "924px",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "850px",
      objectFit: "cover",
    },
  },
}));

export default useStyles;
