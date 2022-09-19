const express = require("express");
const app = express();
const cors = require("cors");

const admin = require("firebase-admin");
const credentials = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.post("/register", async (req, res) => {
  const userResponse = await admin
    .auth()
    .createUser({
      email: req.body.email,
      password: req.body.password,
      emailVerified: false,
      disabled: false,
    })
    .catch((e) => {
      res.status(401).send({
        message: e.message,
      });
    });

  res.send(userResponse);
});
