import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import { Menu, MenuItem } from "@material-ui/core";

const StyledMenu = withStyles({
  paper: {
    boxShadow: "0px 16px 40px rgba(112, 144, 176, 0.15)",
  },
})((props) => (
  <Menu
    elevation={0}
    disableScrollLock={true}
    disableAutoFocusItem={true}
    getContentAnchorEl={null}
    style={{ zIndex: 1251 }}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    MenuListProps={{
      style: { boxShadow: "0px 16px 40px rgba(112, 144, 176, 0.15)" },
      disablePadding: true,
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
  Appbar: {
    background: "#FFFFFF",
  },
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
    width: "400px",
    fontFamily: "Poppins",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuText: {
    fontFamily: "Poppins !important",
    fontSize: "16px",
    fontWeight: "500 !important",
    cursor: "pointer",
    transition: "0.3s all ease-out",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  menuTextActive: {
    fontFamily: "Poppins !important",
    fontSize: "16px",
    fontWeight: "600 !important",
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
  icon: {
    width: "32px",
    height: "auto",
    margin: "0 auto",
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
