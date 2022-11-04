import { MigrationInterface, QueryRunner } from "typeorm";

export class default1667462071442 implements MigrationInterface {
    name = 'default1667462071442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "games" ("game_id" character varying NOT NULL, "user_id" character varying NOT NULL, "oddA" integer NOT NULL, "oddE" integer NOT NULL, "oddB" integer NOT NULL, CONSTRAINT "PK_00f32d6507b00b23b8cd327fba7" PRIMARY KEY ("game_id"))`);
        await queryRunner.query(`ALTER TABLE "games" ADD CONSTRAINT "FK_c26f4ceea870c6b52d767c2e24f" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "games" DROP CONSTRAINT "FK_c26f4ceea870c6b52d767c2e24f"`);
        await queryRunner.query(`DROP TABLE "games"`);
    }

}
