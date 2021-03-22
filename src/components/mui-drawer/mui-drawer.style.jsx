import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

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
    overflow: "auto",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  listItem: {
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
  menuText: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "0.3s all ease-out",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  menuTextActive: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "0.3s all ease-out",
    color: theme.palette.primary.main,
  },
  accordionSpace: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-evenly",
    },
  },
}));

export { Accordion, AccordionDetails, AccordionSummary, useStyles };
