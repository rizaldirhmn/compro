import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  imageActivity: {
    width: "100%",
    height: "auto",
    transition: "transform 1s, opacity 0.5s ease-in-out",
    "&:hover": {
      opacity: 0.9,
      transform: "scale(1.01)",
    },
  },
}));

export default useStyles;
