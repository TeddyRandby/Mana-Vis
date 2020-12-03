import { gql } from "@apollo/client";

export const MANIFY_DECK = gql`
  query ManifyDeck($deck: [Card]!) {
    deck @client @export(as: "deck")

    manifyDeck(deck: $deck) {
      manaDeck
    }
  }
`;

export const MANIFY_URL = gql`
  query ManifyURL($url: String!) {
    deckURL @client @export(as: "url")

    manifyURL(url: $url) {
      manaDeck {
        name
        count
      }
    }
  }
`;

export const SCRYFALLIFY_DECK = gql`
  query ScyfallifyDeck($deck: [Card]!) {
    deck @client @export(as: "deck")

    scryfallifyDeck(deck: $deck) {
      name
      cmc
      oracle_text
    }
  }
`;

export const SCRYFALLIFY_URL = gql`
  query ScyfallifyURL($url: String!) {
    deckURL @client @export(as: "url")

    scryfallifyURL(url: $url) {
      name
      count
    }
  }
`;

export const SCRAPE = gql`
  query ScrapeURL($url: String!) {
    deckURL @client @export(as: "url")

    scrape(url: $url) {
      name
      count
    }
  }
`;
