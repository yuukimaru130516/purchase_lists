const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost/purchase_list',
  {
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false 
      }
  }
});



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