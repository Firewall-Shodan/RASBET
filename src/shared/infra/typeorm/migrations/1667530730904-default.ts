import { MigrationInterface, QueryRunner } from 'typeorm';

export class default1667530730904 implements MigrationInterface {
  name = 'default1667530730904';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "bets" ("id" character varying NOT NULL, "user_id" character varying NOT NULL, "amount" double precision NOT NULL, "quota" double precision NOT NULL, "created_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_7ca91a6a39623bd5c21722bcedd" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "bets_team" ("id" character varying NOT NULL, "bet_id" character varying NOT NULL, "away_team" character varying NOT NULL, "home_team" character varying NOT NULL, "result" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_78ab63d8a07395b72e0e1e671ef" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "bets" ADD CONSTRAINT "FK_8e3c745e288eea6d3c9475550e2" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "bets_team" ADD CONSTRAINT "FK_1054081bed209216846f395f907" FOREIGN KEY ("bet_id") REFERENCES "bets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "bets_team" DROP CONSTRAINT "FK_1054081bed209216846f395f907"`);
    await queryRunner.query(`ALTER TABLE "bets" DROP CONSTRAINT "FK_8e3c745e288eea6d3c9475550e2"`);
    await queryRunner.query(`DROP TABLE "bets_team"`);
    await queryRunner.query(`DROP TABLE "bets"`);
  }
}
