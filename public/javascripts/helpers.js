const sqlite3 = require('sqlite3').verbose();
const path = require('path')


const helper = {
    connectToDb() {
        const dbPath = path.resolve(__dirname, '../../db/messages.sqlite3')
        const db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
              return console.error(err.message);
            }
            //console.log('Connected to the in-memory SQlite database.');
        });

        return db
    }
}

module.exports = helper;
