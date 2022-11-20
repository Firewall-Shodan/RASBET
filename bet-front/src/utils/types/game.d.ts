interface IGame {
  id: string;
  awayTeam: string;
  commenceTime: string;
  completed: false;
  homeTeam: string;
  scores: any;
}

interface IGameAll {
  id: string;
  odds: {
    oddA: number;
    oddE: number;
    oddB: number;
  };
  game: IGame;
}
