// DEPENDENCIES
'use strict'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
   
    
      // define association here
      static associate({ MeetGreet, SetTime }) {
        // meet and greets
        Band.hasMany(MeetGreet, {
          foreignKey: "band_id",
          as: "meet_greets"
        })
  
        // set times 
        Band.hasMany(SetTime, {
          foreignKey: "band_id",
          as: "set_times"
        })
      }
    
    
  }
  Band.init({
    band_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    recommendation: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Band',
    tableName: 'band',
    timestamps: false
  })
  return Band
}