// const mysql = require("mysql2");
import mysql from "mysql2";


let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "testing_db",

});

con.connect((err) => {
    if (err) {
        console.log("Error!::)", err)
        throw err
    }
    else {
        console.log('Db connected!');
    }
});

// module.exports = con.promise();
export default con = con.promise()