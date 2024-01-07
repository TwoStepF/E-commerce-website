import config from "./config"
import { User } from "../entity/User";
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: config.database.host,
    port: config.database.port,
    username: config.database.user,
    password: config.database.pass,
    database: config.database.database,
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrationsTableName: "custom_migration_table",
    migrations: [],
})