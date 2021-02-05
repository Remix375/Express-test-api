const express = require("express");
const router = express.Router();
const helper = require('../public/javascripts/helpers')





router.get('/messages', (req, res, next) => {
    let getMessagesConnection = helper.connectToDb()
    const queryTodb = `SELECT * FROM messages ORDER BY id DESC LIMIT 15`
    
    getMessagesConnection.all(queryTodb, {}, (err, results) => {
        console.log(results)
        if (err) {
        //console.log(err)
        } else {
        //console.log(results)
        res.send(results)
        }
    })
    getMessagesConnection.close()
})



router.post('/message', (req, res, next) => {
  let db = helper.connectToDb()
  const queryTodb = `INSERT INTO messages (content) VALUES ("${req.body.message}");`

  db.run(queryTodb, {}, (err, results) => {
    if (err) {
      //console.log(err)
    } else {
      //console.log(results)
      res.send(results)
    }
  })
  db.close()
})


module.exports = router;