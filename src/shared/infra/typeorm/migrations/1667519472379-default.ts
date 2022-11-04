import { MigrationInterface, QueryRunner } from 'typeorm';

export class default1667519472379 implements MigrationInterface {
  name = 'default1667519472379';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "birthday" TIMESTAMP NOT NULL, "nif" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "games" ("game_id" character varying NOT NULL, "user_id" character varying NOT NULL, "oddA" double precision NOT NULL, "oddE" double precision NOT NULL, "oddB" double precision NOT NULL, CONSTRAINT "PK_00f32d6507b00b23b8cd327fba7" PRIMARY KEY ("game_id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "games" ADD CONSTRAINT "FK_c26f4ceea870c6b52d767c2e24f" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "games" DROP CONSTRAINT "FK_c26f4ceea870c6b52d767c2e24f"`);
    await queryRunner.query(`DROP TABLE "games"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
