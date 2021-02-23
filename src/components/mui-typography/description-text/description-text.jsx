import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./description-text.style";

export const DescriptionText = ({ text, textAlignLeft = false, ...props }) => {
  const classes = useStyles();

  const { className } = props;

  return (
    <>
      <Typography
        {...props}
        className={
          className
            ? className
            : textAlignLeft
            ? classes.textAlignLeft
            : classes.text
        }
        color="textSecondary"
        variant="body1"
      >
        {text}
      </Typography>
    </>
  );
};
