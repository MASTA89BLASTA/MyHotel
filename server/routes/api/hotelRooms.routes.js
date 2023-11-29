const router = require("express").Router();
const { HotelRoom } = require("../../db/models");

router
  .route("/")
  .get((req, res) => {
    HotelRoom.findAll()
      .then(allHotelRooms => res.json({ hotelRooms: allHotelRooms }))
      .catch(error => res.status(500).json(error));
  })
  .post((req, res) => {
    HotelRoom.create(req.body)
      .then(newRoom => res.status(201).json(newRoom))
      .catch(error => res.status(500).json(error));
  });

router
  .route("/:id")
  .put((req, res) => {
    const { id } = req.params;

    HotelRoom.update(req.body, { where: { id }, returning: true })
      .then(updatedHotelRoom => res.json(HotelRoom))
      .catch(error => res.status(500).json(error));
  })
  .delete((req, res) => {
    const { id } = req.params;
    HotelRoom.destroy({ where: { id } })
      .then(data => (data ? res.json(id) : res.status(404).json(data)))
      .catch(error => res.status(500).json(error));
  });

module.exports = router;
