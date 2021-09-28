const express = require('express');
const {
  getStations,
  updateStation,
  deleteStation,
  getStationNearMe,
  clientProgram,
  businessProgram,
} = require('../controllers/stations');

const router = express.Router();

router.route('/').get(getStations);
router.route('/find').get(clientProgram);
router.route('/business').get(businessProgram);
router.route('/nearest').post(getStationNearMe);
router.route('/:id').put(updateStation).delete(deleteStation);

module.exports = router;
