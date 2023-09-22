// Import packages
const express = require("express");
const bodyParser = require('body-parser');
const { StreamChat } = require('stream-chat');
//const home = require("./routes/home");

// Middlewares
const app = express();

const apiKey = "77ykkm9dtjuu";
const apiSecret = "x3f8rdev4b2h62dxk6rxbdbpttbeqbhgsyb5uxqtkxqwgrdjn56nxa98mhe4w2p2";

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
