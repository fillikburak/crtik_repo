module.exports.ConnectionString =
  "mssql://nurullah:123qweASD@CPX-9RHIAK6CUBY/IKCRM";

module.exports.dbConfig = {
  user: "nurullah",
  password: "123qweASD",
  server: "CPX-9RHIAK6CUBY",
  port: 1433,
  database: "IKCRM",
  connectionTimeout: 15000,
  requestTimeout: 15000,
  stream: false,
  parseJSON: false,

  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
};
