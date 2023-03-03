const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");
const path = require("path");
const config = require("../config/jsonDBConfig.json");

const mode = process.env.NODE_ENV || "development";
const filePath = path.resolve(__dirname, config[mode].file);

const dbClient = new JsonDB(new Config(filePath, true, true, "/"));

const db = {};
db.client = dbClient;

const model = require("./Slide")(db);
db[model.modelName] = model;

module.exports = db;
