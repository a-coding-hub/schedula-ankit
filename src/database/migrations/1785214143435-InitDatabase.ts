import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDatabase1785214143435 implements MigrationInterface {
    name = 'InitDatabase1785214143435'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "doctors" ("id" SERIAL NOT NULL, "specialization" character varying NOT NULL, "experience" integer NOT NULL, "qualification" character varying NOT NULL, "consultationFee" numeric NOT NULL, "availability" character varying NOT NULL, "profileDetails" character varying, "userId" integer, CONSTRAINT "REL_55651e05e46413d510215535ed" UNIQUE ("userId"), CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "patients" ("id" SERIAL NOT NULL, "age" integer NOT NULL, "gender" character varying NOT NULL, "contact" character varying NOT NULL, "healthInformation" character varying, "userId" integer, CONSTRAINT "REL_2c24c3490a26d04b0d70f92057" UNIQUE ("userId"), CONSTRAINT "PK_a7f0b9fcbb3469d5ec0b0aceaa7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "FK_55651e05e46413d510215535edf" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "patients" ADD CONSTRAINT "FK_2c24c3490a26d04b0d70f92057a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patients" DROP CONSTRAINT "FK_2c24c3490a26d04b0d70f92057a"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "FK_55651e05e46413d510215535edf"`);
        await queryRunner.query(`DROP TABLE "patients"`);
        await queryRunner.query(`DROP TABLE "doctors"`);
    }

}
