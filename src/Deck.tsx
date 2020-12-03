import { useReactiveVar } from "@apollo/client";
import {
  makeStyles,
  createStyles,
  Paper,
  InputBase,
  IconButton,
  Divider,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import { AddCircle, RemoveCircle } from "@material-ui/icons";
import { Pagination, Skeleton } from "@material-ui/lab";
import React from "react";
import { DeckErrorVar, DeckLoadingVar, DeckVar } from "./cache";
import { usePager } from "./hooks/usePager";
import {
  INCREMENT_CARD_COUNT,
  DECREMENT_CARD_COUNT,
} from "./reducers/reducers";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {},
    },
    row: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    skeleton: {
      height: 500,
    },
    message: {
      padding: theme.spacing(2),
    },
    pagination: {
      display: "flex",
      alignItems: "center",
    },
  })
);

export function Deck() {
  const classes = useStyles();

  const deck = useReactiveVar(DeckVar);
  const loading = useReactiveVar(DeckLoadingVar);
  const error = useReactiveVar(DeckErrorVar);

  const rowsPerPage = 12;
  const { row, updatePage, pages } = usePager(deck.length, rowsPerPage);

  if (loading)
    return (
      <Skeleton className={classes.skeleton} variant="rect" animation="wave" />
    );

  if (error) return BuildTextDisplay(classes)("No deck found.");

  if (deck.length > 0) {
    return (
      <Paper elevation={3} className={classes.root}>
        <Pagination
          className={classes.pagination}
          onChange={(_: any, v: number) => updatePage(v)}
          count={pages}
        />
        {deck.slice(row, row + rowsPerPage).map(BuildMapCard(classes))}
      </Paper>
    );
  }

  return null;
}

/*
 * Helper function to generate a function
 *  that builds a message element do display a message.
 */
const BuildTextDisplay = (classes: any) => {
  return (msg: string) => (
    <Paper elevation={3} className={classes.root}>
      <Typography className={classes.message} variant="h5">
        {msg}
      </Typography>
    </Paper>
  );
};

/*
 * Helper function to generate a function
 *  that builds displays for cards.
 */
const BuildMapCard = (classes: any) => {
  return (card: any) => (
    <div key={`${card.count}${card.name}`} className={classes.row}>
      <InputBase
        readOnly
        className={classes.input}
        defaultValue={card.name}
        startAdornment={
          <InputAdornment position="start">
            <strong>{card.count}</strong>
          </InputAdornment>
        }
      />
      <IconButton
        onClick={() => DECREMENT_CARD_COUNT(card)}
        className={classes.iconButton}
      >
        <RemoveCircle />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        onClick={() => INCREMENT_CARD_COUNT(card)}
        className={classes.iconButton}
      >
        <AddCircle />
      </IconButton>
    </div>
  );
};
