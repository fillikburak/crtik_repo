const sql = require("mssql");
const settings = require("../settings.js");

module.exports = {
  query_list: function(sql_query, callback) {
    return query(sql_query, true, callback);
  },
  query_single: function(sql_query, callback) {
    return query(sql_query, false, callback);
  }
};

//Select sorguları için kullanılacak metod.
function query(sql_query, isList, callback) {
  const connection = new sql.ConnectionPool(settings.dbConfig);
  connection.connect(function() {
    new sql.Request(connection)
      .query(sql_query)
      .then(function(records) {
        console.log("Success connection");
        DeepTrim(records);
        callback(null, isList ? records : records.recordset[0]);
        connection.close();
      })
      .catch(function(err) {
        console.log("Fail connection");
        console.log(err);
        callback(err, null);
      });
  });
}

//Database den gelen dataları trimlemek,
//boşluklardan arındırmak için kullanılır.
function DeepTrim(obj) {
  for (var prop in obj) {
    var value = obj[prop],
      type = typeof value;
    if (
      value != null &&
      (type == "string" || type == "object") &&
      obj.hasOwnProperty(prop)
    ) {
      if (type == "object") {
        DeepTrim(obj[prop]);
      } else {
        obj[prop] = obj[prop].trim();
      }
    }
  }
}

//Tarihleri formatlamak ve
//standart oluşturmak için kullanılır.
function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("-");
}
