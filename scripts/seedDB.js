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
    user: "prolsu",
    date: new Date(Date.now())
  },
  {
    reaction: "BUY GAMESTOP!",
    user: "Unkownuser",
    date: new Date(Date.now())
  },
  {
    reaction: "How do you feel about GOLD right now?",
    user: "J.D. Salinger",
    date: new Date(Date.now())
  },
  {
    reaction: "Market in the red! Sell, Sell, Sell!!!",
    user: "Tal M. Klein",
    date: new Date(Date.now())
  },
  {
    reaction: "Bought $100k of FB today",
    user: "J.K. Rowling",
    date: new Date(Date.now())
  },
  {
    reaction: "Everyone is using Robinhood now...",
    user: "Neil Gaiman",
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
