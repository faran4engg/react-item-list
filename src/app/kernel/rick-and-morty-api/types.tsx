export interface RickAndMortyAPI {
  info: InfoAPI;
  results: ResultsAPI[];
}

export interface InfoAPI {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ResultsAPI {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginAPI;
  location: LocationAPI;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface OriginAPI {
  name: string;
  url: string;
}

export interface LocationAPI {
  name: string;
  url: string;
}
