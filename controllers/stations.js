// const axios = require('axios');
const Station = require('../models/Station');

// @desc    Get all stations
// @route   GET /api/v1/stations
// @access  Public
exports.getStations = async (req, res, next) => {
  try {
    // delete current stations data
    // await Station.deleteMany();
    // update stations db with latest data from vlille API
    // const response = await axios.get(process.env.VLILLE_URL);
    // await Station.create(response.data.records);
    // get stations from db
    const stations = await Station.find();
    res
      .status(200)
      .json({ success: true, count: stations.length, data: stations });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Get a single station
// @route   GET /api/v1/stations/:id
// @access  Public
exports.getStation = async (req, res, next) => {
  try {
    const regex = new RegExp(req.params.id);
    const station = await Station.findOne({ 'fields.nom': { $regex: regex } });
    if (!station) {
      return res.status(400).json({ sucess: false });
    }
    res.status(200).json({ success: true, data: station });
  } catch (err) {
    res.status(400).json({ success: false });
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
    res.status(200).json({ success: true, data: station });
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
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
