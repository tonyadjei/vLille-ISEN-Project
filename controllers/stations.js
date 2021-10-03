const axios = require('axios');
const Station = require('../models/Station');

// @desc    Get all stations
// @route   GET /api/v1/stations
// @access  Public
exports.getStations = async (req, res, next) => {
  try {
    await Station.deleteMany();
    const response = await axios.get(
      'https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&q=&rows=25'
    );
    await Station.create(response.data.records);
    const stations = await Station.find();

    // res.render('index', { stations });
    console.log(stations);
  } catch (error) {
    console.log(error.message);
  }
};
// @desc    Get client program interface
// @route   GET /api/v1/stations/find
// @access  Public
exports.clientProgram = (req, res, next) => {
  try {
    res.render('client');
  } catch (error) {
    console.log(error.message);
  }
};
exports.businessProgram = (req, res, next) => {
  try {
    res.render('business');
  } catch (error) {
    console.log(error.message);
  }
};

// @desc    Get stations near user position
// @route   POST /api/v1/stations/nearest
// @access  Public
exports.getStationNearMe = async (req, res, next) => {
  try {
    const stations = await Station.find({
      geometry: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [req.body.latitude, req.body.longitude],
          },
          $maxDistance: 1000,
          $minDistance: 0,
        },
      },
    });
    if (!stations) {
      res.status(200).json({ success: true, data: [] });
    }
    // res.render('clientResult', { stations });
    console.log(stations);
  } catch (error) {
    console.log(error);
  }
};

// @desc    Update station
// @route   PUT /api/v1/stations/:id
// @access  Private
exports.updateStation = async (req, res, next) => {
  try {
    const station = await Station.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!station) {
      return res.status(400).json({ success: false });
    }
    // res.status(200).json({ success: true, data: station });
    console.log(station);
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Delete station
// @route   DELETE /api/v1/stations/:id
// @access  Private
exports.deleteStation = async (req, res, next) => {
  try {
    const station = await Station.findByIdAndDelete(req.params.id);
    if (!station) {
      return res.status(400).json({ success: false });
    }
    // res.redirect('/');
    console.log('Station has been deleted!');
  } catch (err) {
    console.log(err);
  }
};
