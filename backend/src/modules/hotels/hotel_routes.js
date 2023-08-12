const Router = require("express");
const router = Router();
const { verifyAdmin } = require('../../middlewears/middlewear');
const { creatHotels , getAllHotels , getHotels , updateHotels , deleteHotels } = require('./hotel_conroller')



router.post("/hotels", creatHotels);
router.get("/hotels", getAllHotels);
router.get("/hotels/:id", getHotels);
router.put("/hotels/:id",updateHotels);
router.delete("/hotels/:id", deleteHotels);


module.exports = router;
