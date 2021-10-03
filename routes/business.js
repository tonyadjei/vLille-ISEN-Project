const express = require('express');
const {
  getStations,
  getStation,
  deleteStation,
  updateStation,
} = require('../controllers/business');

const router = express.Router();

router.route('/').get(getStations);
router.route('/find').get(getStation);
router.route('/:id').put(updateStation).delete(deleteStation);

module.exports = router;
