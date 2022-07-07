const {detectUserIntent, sendMessage} = require('../controllers/webhhook_controllers');
const {actionBasedResponse} = require('../controllers/response_controller');
const express = require("express");
const router = express.Router();


router.post("/webhook/", async (req, res) => {

  const request = req.body.Body
  const senderId = req.body.From

  try {
    const resultQuery = await detectUserIntent(request, senderId);
    const actionType = resultQuery.action
    const response = await actionBasedResponse(actionType);
    
    await sendMessage(response, senderId);
  }
  catch (error) {
    console.log(error);
  }

});


module.exports = router;