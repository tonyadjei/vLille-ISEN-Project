const Business = require('../models/Business');

// @desc    Get all stations
// @route   GET /api/v1/stations
// @access  Public
exports.getStations = async (req, res, next) => {
  try {
    const stations = await Business.find();
    res.render('business', { stations });
    // console.log(stations);
  } catch (error) {
    console.log(error.message);
  }
};
exports.getStation = async (req, res, next) => {
  try {
    const station = await Business.findOne({
      $text: { $search: req.body.name },
    });
    res.render('show', { station });
    // res.status(200).json({ success: true, data: station });
    // console.log(station);
  } catch (error) {
    console.log(error.message);
  }
};

// @desc    Update station
// @route   PUT /api/v1/stations/:id
// @access  Private
exports.updateStation = async (req, res, next) => {
  try {
    const station = await Business.findByIdAndUpdate(req.params.id, req.body, {
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
    const station = await Business.findByIdAndDelete(req.params.id);
    if (!station) {
      return res.status(400).json({ success: false });
    }
    // res.redirect('/api/v1/business');
    console.log('station has been deleted');
  } catch (err) {
    console.log(err);
  }
};
