const mongoose = require('mongoose');

const recordSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
    },
  time: String,
  date: Date,
  species: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Species'
    },
  
//   image:  [
//     {
//         type: String
//     }
// ],
image: String,

locationLongitude: { type: Number, decimal: true },
locationLatitude: { type: Number, decimal: true },
location:String,
notes:String,
quantity: String
}, {
  timestamps: true
});

const Record = mongoose.model("Record", recordSchema);

module.exports = { Record };