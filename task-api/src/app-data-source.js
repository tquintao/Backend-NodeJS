"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
var myDataSource = new typeorm_1.DataSource({
    type: "postgres",
    "host": "queenie.db.elephantsql.com",
    port: 5432,
    username: "lcsnqdmr",
    "password": "CJuPA70Qlsu_Yg0rPpcGH-38SBoBB_w4",
    database: "lcsnqdmr",
    //entities: ["src/entity/*.js"],
    entities: [User_1.User],
    migrations: ["/migrations/"],
    logging: true,
    synchronize: true,
});
exports.default = myDataSource;
