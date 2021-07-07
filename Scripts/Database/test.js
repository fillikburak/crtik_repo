import select from "./sqlSelect";
// const LINQ = require("node-linq").LINQ;

const value = 5;

const query1 = `select * from tbl_Staffs where Id = ${value}`;
const query2 = "select * from tbl_Staffs";

select.query_single(query1, function(err, records) {
  console.log("query_single");
  if (err != null) {
    console.log(err);
  }

  document.getElementById("admin-name").innerHTML =
    records.Name + " " + records.Surname;

  console.dir(records);
});

// select.query_list(query2, function(err, records) {
//   console.log("query_list");
//   if (err != null) {
//     console.log(err);
//   }
//   console.dir(records);
// });
