const {Model, DataTypes} = require('sequelize')



class Car extends Model {
  static init(sequelize) {
      super.init({
          model: DataTypes.STRING,
          make: DataTypes.STRING,
          validate: DataTypes.BOOLEAN

      }, {
          sequelize
      })
      
  }
}

module.exports = Car