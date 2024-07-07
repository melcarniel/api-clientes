import { MigrationInterface, QueryRunner } from "typeorm";

export class Database1706034116223 implements MigrationInterface {
    name = 'Database1706034116223'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`clientes\` (\`id\` varchar(36) NOT NULL, \`nome\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`cpf\` varchar(255) NOT NULL, UNIQUE INDEX \`idx_cliente_cpf\` (\`cpf\`), UNIQUE INDEX \`idx_cliente_id\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`clientes\``);
    }

}
