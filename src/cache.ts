import { InMemoryCache, makeVar, ReactiveVar } from "@apollo/client";

export interface Card {
  name: string;
  count: number;
  id: number;
}

export const DeckUrlVar: ReactiveVar<String> = makeVar<String>("");
/*
 * Split the cards up by card type right here.
 */
export const DeckVar: ReactiveVar<Card[]> = makeVar<Card[]>([]);
export const DeckLoadingVar: ReactiveVar<boolean> = makeVar<boolean>(false);
export const DeckErrorVar: ReactiveVar<any> = makeVar<any>(undefined);

export const DeckCreaturesVar: ReactiveVar<Card[]> = makeVar<Card[]>([]);
export const DeckLandsVar: ReactiveVar<Card[]> = makeVar<Card[]>([]);
export const DeckSpellsVar: ReactiveVar<Card[]> = makeVar<Card[]>([]);

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        deckURL: {
          read() {
            return DeckUrlVar();
          },
        },
        deck: {
          read() {
            return DeckVar();
          },
        },
      },
    },
  },
});
