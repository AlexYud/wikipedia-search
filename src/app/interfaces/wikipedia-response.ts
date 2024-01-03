export interface WikipediaResponse {
  batchcomplete: string;
  continue: Continue;
  query: Query;
}

interface Query {
  searchinfo: Searchinfo;
  search: Search[];
}

export interface Search {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: string;
}

interface Searchinfo {
  totalhits: number;
  suggestion: string;
  suggestionsnippet: string;
}

interface Continue {
  sroffset: number;
  continue: string;
}