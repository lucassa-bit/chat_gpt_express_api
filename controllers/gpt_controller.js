// ------------------------------------- Initialization ------------------------------- //
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.API_PASSWORD,
});

const openai = new OpenAIApi(configuration);

// ------------------------------------- Controllers ------------------------------- //
const sendAmessage = async (req, res) => {
  try {
    if(!req.body && !req.body.message) 
      throw new Error("Message is not defined");

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: req.body.message},
      ],
    });
    res.status(200).json({
      status: 'Success',
      request_time: req.requestTime,
      data: completion.data.choices[0].message,
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail',
      request_time: req.requestTime,
      message: err.message,
    });
  }
};

module.exports = {
  sendAmessage,
};
