const mongoose = require('mongoose');

const recordSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  time: Date,
  date: Date,
  species: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Species'
    },
  image:  [
    {
        type: String
    }
],
locationLongitude: { type: Number, decimal: true },
locationLatitude: { type: Number, decimal: true }
}, {
  timestamps: true
});

const Record = mongoose.model("Record", recordSchema);

module.exports = { Record };