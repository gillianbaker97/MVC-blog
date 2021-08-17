const User = require('./User');
const Blogs = require('./blogs');
const Posts = require('./posts');
// add for comment

User.hasMany(Posts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Posts.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Posts };
