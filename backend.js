const express = require('express');
const bodyParser = require('body-parser');
const mysql=require('mysql');
// create express app
const app = express();
// Setup server port
const port = 3000;
const conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mhada101',
    database : 'sneakerhub',
    port    :   3306
  });
  conn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

app.post("/register", (req, res) => {
    const user = req.body;
    let query = "select * from users";
    conn.query(query, (err, result) => {
        if(err) {
            res.write(err);
            return;
        }
        if(Object.keys(result).length === 0) {
            query = "insert into users values('" + user["username"] + "', '" + user["email"] + "', '" + user["password"] + "')";
            conn.query(query, (err, result) => {
                if(err) {
                    res.write(err);
                }
                res.write("<h1>Form Submitted</h1>");
            });
        }
        else {
            for(const users in result) {
                if(result[users]["username"] == user["username"]) {
                    res.write("Username taken!");
                    return;
                }
            }
            query = "insert into users values('" + user["username"] + "', '" + user["email"] + "', '" + user["password"] + "')";
            conn.query(query, (err, result) => {
                if(err) {
                    res.write(err);
                }
                res.write("<h1>Form Submitted</h1>");
            });
        }
    });
});

app.post("/card", (req, res) => {
    const card = req.body;
    query = "insert into cardDetails values('" + card["name"] + "', '" + card["phone"] + "', '" + card["address"] + "', '" + card["card"] + "')";
    conn.query(query, (err) => {
        if(err) {
            throw err;
            return;
        }
        res.write("<h1>Booked</h1>")
    });
});

app.listen(3000, (err) => {
  if(err) {
    throw err;
  }
  console.log("Connected");
});


