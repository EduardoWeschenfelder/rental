import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1640011527450 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid"
          },
          {
            name: "name",
            type: "varchar"
          },
          {
            name: "password",
            type: "varchar"
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "driver_licences",
            type: "varchar"
          },
          {
            name: "isAdmin",
            type: "boolean",
            default: false
          },
          {
            name: "create_at",
            type: "timestamp",
            default: "now()"
          },
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users")
  }

}
