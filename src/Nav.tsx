import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

export const Nav = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
          <Menu />
        </IconButton>
        <Typography>Mana vis</Typography>
      </Toolbar>
    </AppBar>
  );
};
