import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import { Menu, MenuItem } from "@material-ui/core";

const StyledMenu = withStyles({})((props) => (
  <Menu
    elevation={0}
    disableScrollLock={true}
    getContentAnchorEl={null}
    style={{ zIndex: 1251 }}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  Appbar: {
    background: "#FFFFFF",
    boxShadow: "none",
  },
  // title: {
  //   flexGrow: 1,
  // },
  active: {
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "transparent",
    },
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
    alignItems: "center",
    width: "450px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
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
    color: theme.palette.primary.main,
  },
  logo: {
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
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      padding: "7px 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
}));

export { useStyles, StyledMenu, StyledMenuItem };
