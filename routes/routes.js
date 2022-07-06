const {textQuery} = require('../responses/response');
const express = require("express");
const router = express.Router();

router.post("/webhook/", async (req, res) => {
  const {Body, To, From} = req.body

  const resultQuery = await textQuery(Body, From);
  const resObj = {
    fulfillmentText: resultQuery.fulfillmentText,
    intent: resultQuery.intent.displayName,
  }
  console.log(resObj);
  res.send(resObj);

});


module.exports = router;