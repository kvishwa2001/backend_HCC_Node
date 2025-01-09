const mysql = require("mysql2")
// old
 const connection = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    waitForConnections:true,
    connectionLimit:100,
    queueLimit:0
});

// APLHA CLOUD
// const connection = mysql.createPool({
//     host: '111.118.177.178', // Use 'localhost' if running on the same server
//     user: "alpharhz_rootadmin",
//     password: "localhostroot",
//     database: "alpharhz_collection",
//     waitForConnections: true,
//     connectionLimit: 100,
//     queueLimit: 0
// });

// host:'106.51.180.3',
// user:"mnshar_sql", 
// password:"Hinzah@@@2024",
// database:"collection",
// waitForConnections:true,
// connectionLimit:100,
// queueLimit:0


connection.getConnection((err)=>{
    if (err) {
        console.error("Error Connecting to MySQL :",err.stack);
        return;
    }
    console.log("Connected to mySql")
})

module.exports = connection;
