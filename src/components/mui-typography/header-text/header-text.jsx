import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./header-text.style";

export const HeaderText = ({ text, ...props }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" className={classes.text} {...props}>
        {text}
      </Typography>
    </>
  );
};
