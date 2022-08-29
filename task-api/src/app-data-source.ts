import { DataSource } from "typeorm"
import { User } from "./entity/User";

const myDataSource = new DataSource({
    type: "postgres",
    "host": "queenie.db.elephantsql.com",
    port: 5432,
    username: "lcsnqdmr",
    "password": "CJuPA70Qlsu_Yg0rPpcGH-38SBoBB_w4",
    database: "lcsnqdmr",
    //entities: ["src/entity/*.js"],
    entities: [User],
    migrations: ["/migrations/"],
    logging: true,
    synchronize: true,
})

export default myDataSource;