import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Bet } from './Bet';

@Entity('bets_team')
export class BetTeam {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'bet_id' })
  betId: string;

  @Column({ name: 'away_team' })
  awayTeam: string;

  @Column({ name: 'home_team' })
  homeTeam: string;

  @Column()
  result: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => Bet)
  @JoinColumn({ name: 'bet_id' })
  bet: Bet;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }

    if (!this.createdAt) {
      this.createdAt = new Date();
    }
  }
}
