const {detectUserIntent, sendMessage} = require('../responses/response');
const express = require("express");
const router = express.Router();


router.post("/webhook/", async (req, res) => {

  const request = req.body.Body
  const senderId = req.body.From

  const resultQuery = await detectUserIntent(request, senderId);
  const resObj = {
    fulfillmentText: resultQuery.fulfillmentText,
    intent: resultQuery.intent.displayName,
  }
  res.send(resObj);

  await sendMessage(resultQuery.fulfillmentText, senderId);

});


module.exports = router;