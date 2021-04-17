const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/purchase_list',
  {
    logging: false
  }
);


const Post = sequelize.define(
  'purchase_list',
  {
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    content: {
      type: Sequelize.TEXT
    }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
);

Post.sync();

module.exports = Post;