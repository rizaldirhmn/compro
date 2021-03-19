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
    fontFamily: "Montserrat",
    fontWeight: 700,
  },
  category: {
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: 13,
    marginLeft: "15px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  titleTextSpace: {
    marginTop: "5px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "4px",
    },
  },
  card: {
    width: "290px",
    height: "420px",
    background: "#fff",
    borderRadius: "25px",
    filter: "drop-shadow(0px 16px 40px rgba(112, 144, 176, 0.15))",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px",
      width: "100%",
      height: "160px",
    },
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "210px",
    padding: "24px 24px",
    [theme.breakpoints.down("xs")]: {
      height: "130px",
      width: "100%",
      padding: "5px",
      marginLeft: "15px",
    },
  },
  containerPict: {
    width: "auto",
    height: "210px",
    objectFit: "fill",
    borderRadius: "25px 25px 0 0",
    [theme.breakpoints.down("xs")]: {
      width: "240px",
      height: "130px",
      borderRadius: "25px",
    },
  },
  pict: {
    width: "100%",
    height: "210px",
    objectFit: "cover",
    borderRadius: "25px 25px 0 0",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "130px",
      borderRadius: "25px",
    },
  },
  icon: {
    width: "14px",
    height: "auto",
    color: "#fff",
    marginLeft: "6px",
  },
}));

export default useStyles;
