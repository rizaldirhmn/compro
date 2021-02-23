import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "85%",
    margin: "0 auto",
  },
  flex: {
    display: "flex",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
      flexDirection: "column",
    },
  },
  iconBox: {
    height: "75px",
    width: "75px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  position: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "80px",
    [theme.breakpoints.down("sm")]: {
      alignItems: "stretch",
      flexDirection: "column",
    },
  },
  platformPaper: {
    boxShadow: "none",
    backgroundImage: "linear-gradient(90deg, #E1F6FF, #D9F3FF)",
    borderRadius: 25,
    width: "100%",
  },
  platformSpace: {
    display: "flex",
    alignItems: "center",
    padding: "10px 120px 10px 30px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px 30px 10px 30px",
    },
  },
  platformContent: {
    fontSize: "18px",
    color: theme.palette.primary.main,
    fontFamily: "Montserrat",
    fontWeight: 600,
  },
  iconPlatform: {
    width: "40px",
    height: "40px",
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
