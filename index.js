// Import packages
const express = require("express");
const bodyParser = require('body-parser');
const { StreamChat } = require('stream-chat');
//const home = require("./routes/home");

// Middlewares
const app = express();

const apiKey = "9mfvxkw8eb98";
const apiSecret = "s99ujazzdx6cn725csafdk5jyv2j9qva9t7hks75hkwmk5n9q5t7c7cnjuh6xr87";

const chatClient = new StreamChat(apiKey, apiSecret);


app.use(bodyParser.json());

// Routes


app.post("/", async (req, res, next) => {
  const { user_id } = req.body;

   // Générez un jeton pour l'utilisateur spécifié
   token = chatClient.createToken(user_id);
  res.status(200).json({
     token
  });
});


// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
