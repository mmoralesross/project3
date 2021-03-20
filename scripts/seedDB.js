const mongoose = require("mongoose");
const db = require("../models");

// This file empties the posts collection and inserts the user posts below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/marketreactdb"
);

const postsSeed = [
  {
    reaction: "Let's talk about the goverments stimulus",
    email: "prolsu@gmail.com",
    date: new Date(Date.now())
  },
  {
    reaction: "BUY GAMESTOP!",
    email: "Unkownusername@gmail.com",
    date: new Date(Date.now())
  },
  {
    reaction: "How do you feel about GOLD right now?",
    email: "J.D.Salinger@gmail.com",
    date: new Date(Date.now())
  },
  {
    reaction: "Market in the red! Sell, Sell, Sell!!!",
    email: "TalM.Klein@gmail.com",
    date: new Date(Date.now())
  },
  {
    reaction: "Bought $100k of FB today",
    email: "J.K.Rowling@gmail.com",
    date: new Date(Date.now())
  },
  {
    reaction: "Everyone is using Robinhood now...",
    email: "NeilGaiman@gmail.com",
    date: new Date(Date.now())
  }
];

db.UserReaction
  .remove({})
  .then(() => db.UserReaction.collection.insertMany(postsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
