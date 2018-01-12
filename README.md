# nodejs-mysql

- Clone or download this code , goto the project directory then run npm install 
- Run the db.sql file on your mysql server to create db schema and sample data
- Open TestMysql.js file and correct the database details according to your db configuration-:
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'nodejs_demo_db'
});



- run the following command to see the output

node TestMysql.js

Sample Output: 
id :  1 , Name :  Tom , Mobile : 9876543210
id :  2 , Name :  Sam , Mobile : 6549873210


