// routes for users
var User = require('../models/user')

// listing all the users
exports.list = function(req, res){
  // get the list of users
  var users = User.find({}, function (err, docs) {
    if (err)
      return console.log("error", users);
    // send it back
    res.render('users', {users: docs, title: 'My First app'});
  });
};

// creating a new user
exports.create = function(req, res){

  console.log("NEW");
  // create the user

  var catName = 'test kitty';
  var allColors = ['fire','darkphantom','nightmare','solaris','liquidmind', 'electric blue'];
  var catColor = allColors[randomFromInterval(0,5)];
  var catAge = randomFromInterval(1,15);

  var catName = new User({ name: catName, color: catColor, age: catAge});
  catName.save(function (err) {
    if (err)
      return console.log("error we couldn't save "+ catName);
    // redirect to the list of users
  res.redirect('/users');
  console.log("Creating new cat " + catName);
  });
};

/* Random Number Generator
 * Copied from: http://stackoverflow.com/questions/4959975/random-between-two-numbers-in-javascript
 */
function randomFromInterval(from,to) {
  return Math.floor(Math.random()*(to-from+1)+from);
}
