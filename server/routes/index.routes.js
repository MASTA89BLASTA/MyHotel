const router = require("express").Router();
const hotelRoomsRouter = require("./api/hotelRooms.routes");
const authRouter = require("./api/auth.routes");

router.use("/api/hotelRooms", hotelRoomsRouter);
router.use("/api/auth", authRouter);

module.exports = router;
