interface IBet {
  id: string;
  createdAt: string;
  amount: number;
  quota: number;
  betTeams: [
    {
      id: string;
      createdAt: string;
      awayTeam: string;
      homeTeam: string;
      result: string;
    }
  ];
}
