const express = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {
  const { user_id } = req.body;

   // Générez un jeton pour l'utilisateur spécifié
   token = chatClient.createToken(user_id);
  return res.status(200).json({
     token
  });
});

module.exports = router;
