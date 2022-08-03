var mongoose = require('mongoose');
var User = require('./../models/User.js');
var Comment = require('./../models/Comment.js');
var Item = require('./../models/Item.js');

mongoose.model('Comment');
mongoose.model('Item');
mongoose.model('User');

mongoose.connect(process.env.MONGODB_URI);

var commentsArr = [];
var itemArr = [];
var userArr = [];

for (let i = 1; i <= 100; i++) {
 
  var obj_1 = {
    username: `${i}` ,
    email: `${i}@gmail.com`,
    bio: `prakash${i}`,
    image: 'none',
    role: 'user',
  };
  
userArr.push(obj_1);

  var obj_2 = {
    title: `prakash${i}-title`,
    description: `prakash${i}-description`,
    bio: `prakash${i}`,
    favoritesCount: i,
    image: 'none',
    role: 'none',
  };
  itemArr.push(obj_2);

  var obj_3 = {
    body: 'body' + i,
  };
  commentsArr.push(obj_3);
}

const seed_db = async () => {
  await Comment.insertMany(commentsArr);
  await Item.insertMany(itemArr);
  await User.insertMany(userArr);
};

seed_db().then(() => {
 mongoose.connection.close();
})