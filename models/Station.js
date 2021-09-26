const mongoose = require('mongoose');

const StationSchema = new mongoose.Schema({
  datasetid: String,
  recordid: String,
  fields: Object,
  geometry: {
    //GeoJSON Point
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
      index: '2dsphere',
    },
  },
  record_timestamp: {
    type: Date,
    default: Date.now,
  },
  slug: String,
});

module.exports = mongoose.model('Station', StationSchema);
