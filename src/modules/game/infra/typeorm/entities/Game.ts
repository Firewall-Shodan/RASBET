import { User } from '../../../../users/infra/typeorm/entities/User';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('games')
export class Game extends BaseEntity {
  @PrimaryColumn()
  game_id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('double precision')
  oddA: number;

  @Column('double precision')
  oddE: number;

  @Column('double precision')
  oddB: number;
}
