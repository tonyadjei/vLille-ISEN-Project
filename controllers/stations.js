// @desc    Get all stations
// @route   GET /api/v1/stations
// @access  Public
exports.getStations = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all stations' });
};

// @desc    Get a single station
// @route   GET /api/v1/stations/:id
// @access  Public
exports.getStation = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Get single station with id ${req.params.id}`,
  });
};

// @desc    Update station
// @route   PUT /api/v1/stations/:id
// @access  Private
exports.updateStation = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update station ${req.params.id}` });
};

// @desc    Delete station
// @route   DELETE /api/v1/stations/:id
// @access  Private
exports.deleteStation = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Delete station' });
};
