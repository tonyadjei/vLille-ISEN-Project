const express = require('express');
const {
  getStations,
  updateStation,
  deleteStation,
  getStation,
} = require('../controllers/stations');

const router = express.Router();

router.route('/').get(getStations);
router.route('/:id').get(getStation).put(updateStation).delete(deleteStation);

module.exports = router;
