import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  containerHistory: {
    height: "100%",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
  },
  historyTitle: {
    color: "#fff",
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: 18,
  },
  imageHistory: {
    width: "100%",
    maxWidth: "100%",
    height: "fit-content",
    transition: "opacity 0.5s ease-in-out",
    "&:hover": {
      opacity: 0.7,
    },
    "@media (min-width:1280px) and (max-width:1400px)": {
      height: "400px",
      objectFit: "cover",
    },
  },
  historyDescription: {
    marginTop: theme.spacing(4),
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "30px",
    maxWidth: "500px",
    color: "white",
  },
  historyContent: {
    padding: "50px 100px",
    [theme.breakpoints.down("md")]: {
      padding: "60px 40px 70px 40px",
      marginTop: "250px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "100px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "0",
    },
  },
  historyContent2: {
    padding: "50px 100px",
    [theme.breakpoints.down("md")]: {
      padding: "60px 40px 70px 40px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "0",
    },
  },
}));

export default useStyles;
