import { User } from './../../../../users/infra/typeorm/entities/User';

import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { BetTeam } from './BetTeam';

@Entity('bets')
export class Bet {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column('float')
  amount: number;

  @Column('float')
  quota: number;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => BetTeam, (betTeams) => betTeams.bet)
  betTeams: BetTeam;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }

    if (!this.createdAt) {
      this.createdAt = new Date();
    }
  }
}
