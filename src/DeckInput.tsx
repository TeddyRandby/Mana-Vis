import { useQuery, useReactiveVar } from "@apollo/client";
import { Paper, TextField, makeStyles, createStyles } from "@material-ui/core";
import React from "react";
import { DeckErrorVar, DeckLoadingVar, DeckUrlVar, DeckVar } from "./cache";
import { MANIFY_URL } from "./gql/queries";
import { UPDATE_URL } from "./reducers/reducers";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    textField: {
      width: "90%",
    },
  })
);

export function DeckInput() {
  const classes = useStyles();

  const url = useReactiveVar(DeckUrlVar);
  const skip = url === "";
  const { loading, error, data } = useQuery(MANIFY_URL, { skip });

  DeckLoadingVar(loading);
  DeckErrorVar(error);

  if (data) {
    DeckVar(
      data.manifyURL.manaDeck.map((c: any, id: number) => ({
        ...c,
        id,
      }))
    );
  } else {
    DeckVar([]);
  }

  return (
    <Paper className={classes.root}>
      <TextField
        id="standard-basic"
        label="Decklist URL"
        className={classes.textField}
        onChange={(e: any) => UPDATE_URL(e.target.value)}
      />
    </Paper>
  );
}
