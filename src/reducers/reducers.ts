import { Card, DeckUrlVar, DeckVar } from "../cache";

export const INCREMENT_CARD_COUNT = (card: Card) => {
  const front = DeckVar().slice(0, card.id);
  const back = DeckVar().slice(card.id + 1);

  const count = card.count === 4 ? 4 : card.count + 1;
  DeckVar([...front, { ...card, count }, ...back]);
};

export const DECREMENT_CARD_COUNT = (card: Card) => {
  const front = DeckVar().slice(0, card.id);
  const back = DeckVar().slice(card.id + 1);

  const count = card.count === 1 ? 1 : card.count - 1;
  DeckVar([...front, { ...card, count }, ...back]);
};

/*
 * I would like this to be redone so that this function splits the cards by type.
 */
export const UPDATE_DECK = (deck: Card[]) => {
  DeckVar(deck);
};

export const UPDATE_URL = (url: string) => {
  UPDATE_DECK([]);
  DeckUrlVar(url);
};
