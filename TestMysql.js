var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'nodejs_demo_db'
});

connection.connect()


connection.query('select * from customer_details', function (err, rows, fields) {
  if (err) throw err

  rows.forEach(function(element) {
      console.log("id :  "+element.id+" , Name :  "+element.cust_name+" , Mobile : "+element.cust_mobile);
  });
})

connection.end()
