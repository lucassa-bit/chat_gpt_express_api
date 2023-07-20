// ------------------------------------- Initialization ------------------------------- //
const Express = require('express');
const controller = require('../controllers/gpt_controller');

const router = Express.Router();

// ------------------------------------- Routing ------------------------------- //
router
  .route('/')
  .post(controller.sendAmessage);

module.exports = router;
