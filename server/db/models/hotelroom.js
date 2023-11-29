"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HotelRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: "userId" });
    }
  }
  HotelRoom.init(
    {
      price: {
        type: DataTypes.INTEGER,
      },
      roomNumber: {
        type: DataTypes.INTEGER,
      },
      img: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
      },
      levelName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "cascade",
      },
    },
    {
      sequelize,
      modelName: "HotelRoom",
    }
  );
  return HotelRoom;
};
