"use strict";
const bcrypt = require("bcrypt");
const { HotelRoom, User } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.create(
      {
        email: "admin@mail.ru",
        name: "Admin",
        surname: "Admin",
        gender: "true",
        password: await bcrypt.hash("123", 10),
        HotelRooms: [
          {
            price: 7500,
            roomNumber: 888,
            img: "../../img/room_details_lg.png",
            rating: 5,
            levelName: "люкс",
          },
          {
            price: 6500,
            roomNumber: 840,
            img: "../../img/hotel_room6.jpg",
            rating: 4,
            levelName: "комфорт",
          },
          {
            price: 5000,
            roomNumber: 800,
            img: "../../img/hotel_room9.jpg",
            rating: 3,
            levelName: "стандарт",
          },
        ],
      },
      {
        include: [HotelRoom],
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({ truncate: { onDelete: "cascade" } });
  },
};
