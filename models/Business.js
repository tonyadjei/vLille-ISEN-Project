const mongoose = require('mongoose');
const BusinessSchema = new mongoose.Schema({
  datasetid: String,
  recordid: String,
  fields: {
    type: Object,
    properties: {
      etat: { type: String },
      etatconnexion: { type: String },
      nbvelosdispo: { type: Number },
      nbplacesdispo: { type: Number },
      commune: { type: String },
      libelle: { type: Number },
      localisation: { type: [Number] },
      nom: { type: String },
      adresse: { type: String },
      geo: { type: [Number] },
    },
    additionalProperties: true,
  },
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

module.exports = mongoose.model('Business', BusinessSchema);
