import React from "react";
import { DeckInput } from "./DeckInput";
import { Deck } from "./Deck";
import { Nav } from "./Nav";
import { Grid, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    grid: {
      marginTop: theme.spacing(1),
    },
  })
);
function App() {
  const classes = useStyles();

  return (
    <div>
      <Nav />
      <Grid className={classes.grid} container spacing={2}>
        <Grid item xs={12} md={4}>
          <DeckInput />
        </Grid>

        <Grid item xs={12} md={8}></Grid>

        <Grid item xs={12} md={4}>
          <Deck />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
