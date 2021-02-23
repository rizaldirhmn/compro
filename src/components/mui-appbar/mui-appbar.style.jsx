import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

const Accordion = withStyles({
  root: {
    border: "none",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionDetails = withStyles((theme) => ({
  root: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "transparent",
    borderBottom: "none",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Appbar: {
    background: "#FFFFFF",
    boxShadow: "none",
    zIndex: 100000,
    overflowY: "auto",
  },
  toolbarmixins: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  list: {
    width: "auto",
  },
  fullList: {
    width: "auto",
  },
  paper: {
    backgroundColor: "none",
    boxShadow: "none",
  },
  drawerPosition: {
    position: "relative",
    top: "20%",
    marginTop: "50px",
    backgroundColor: "none",
  },
  listItem: {
    padding: "10px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  menuItems: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuText: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
      transition: "0.3s all ease-out",
    },
  },
  logo: {
    position: "relative",
    width: "20%",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "18%",
      height: "auto",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 6rem",
    [theme.breakpoints.down("sm")]: {
      width: "85%",
      margin: "0 auto",
      padding: "0.5rem 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "85%",
    },
  },
}));

export { useStyles, Accordion, AccordionSummary, AccordionDetails };
