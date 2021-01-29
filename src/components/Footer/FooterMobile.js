import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons/";
const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "#eaded0",
      "&:hover": {
        fill: "#dbb700",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation
      width="auto"
      height="auto"
      style={{ background: "#353236" }}
    >
      <BottomNavigationAction
        className={classes.root}
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/gustavdias"
        style={{ padding: 0 }}
        icon={<GitHub />}
      />

      <BottomNavigationAction
        className={classes.root}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/gustavoalmd/"
        style={{ padding: 0 }}
        icon={<LinkedIn />}
      />
    </BottomNavigation>
  );
};

export default Footer;
