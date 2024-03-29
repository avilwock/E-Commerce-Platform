//sequelize model for Category, and requires sequelize and datatype classes
const { Model, DataTypes } = require('sequelize');

//requires sequlize from the connections file, represents mysql connection
const sequelize = require('../config/connection.js');

//Category is defined extending the model class
class Category extends Model {}

//initializes the category model
Category.init(
  {
    // define columns
    id: {
      //specifies data type integer
      type:DataTypes.INTEGER,
      //specifies no null values allowed
      allowNull: false,
      //sets this as primary key
      primaryKey: true,
      //sets it to automatically provide the next number in sequence during creation for id
      autoIncrement: true,
    },
    //sets the category name to a string, and doesn't allow a false value
    category_name: {
      type:DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    //indicates to use sequelize database connection
    sequelize,
    //disabls automatic timestamp fields
    timestamps: false,
    //this prevents sequelize from pluralizing the table name based on model name
    freezeTableName: true,
    //sets column names to underscore instead of camelCase
    underscored: true,
    //assigns the model to have the name category
    modelName: 'category',
  }
);

//exports the category model
module.exports = Category;
