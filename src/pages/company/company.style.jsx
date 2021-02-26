import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "88%",
    margin: "0 auto",
  },
  header: {
    fontWeight: "bold",
    fontFamily: "Montserrat",
    marginTop: theme.spacing(2),
  },
  description: {
    fontFamily: "Montserrat",
    [theme.breakpoints.down("sm")]: {
      fontWeight: 600,
      marginTop: theme.spacing(2),
    },
  },
  title: {
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
  bottomSectionText: {
    fontWeight: 500,
    fontFamily: "Montserrat",
    textAlign: "left",
  },
  sendText: {
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
  background: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    height: "100%",
    marginTop: theme.spacing(10),
  },
  sectionSpaceVission: {
    marginTop: theme.spacing(4),
    textAlign: "justify",
    marginRight: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0),
      paddingLeft: theme.spacing(1),
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
    },
  },
  sectionSpaceMission: {
    marginTop: theme.spacing(4),
    textAlign: "justify",
    marginLeft: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),
      paddingLeft: theme.spacing(1),
    },
  },
  missionText: {
    marginLeft: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(5),
      marginLeft: theme.spacing(0),
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
    },
  },
}));

export default useStyles;
