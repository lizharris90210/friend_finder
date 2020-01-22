var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
    console.log("app get friends");
  });

  app.post("/api/friends", function(req, res) {
    var totalDifference = 0;
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };
    var userData = req.body;
    var userName = userData.name;
    var userScore = userData.scores;

    var b = userScore.map(function(item) {
      return parseInt(item, 10);
    });

    userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: bFriendScore
    };

    console.log("Name: " + userName);
    console.log("User Score: " + userScore);

    var sum = b.reduce((a, b) => a + b, 0);
    console.log("Sum of User Score: " + sum);
    console.log("Best Match: " + bestMatch.friendDifference);
    console.log("--------------------------------------------------");

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalDifference = 0;
      console.log("Total Difference: " + totalDifference);
      console.log(
        "Best Match Friend Difference: " + bestMatch.friendDifference
      );

      var bFriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
      console.log("Total Friend Score: " + bFriendScore);
      totalDifference += Math.abs(sum - bFriendScore);
      console.log("---------> " + totalDifference);

      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDifference = totalDifference;
      }
      console.log("Total Difference: " + totalDifference);
    }

    console.log(bestMatch);
    friendsMatchData.push(userData);
    console.log("New User Added");
    console.log(userData);
    res.json(bestMatch);
  });
};
