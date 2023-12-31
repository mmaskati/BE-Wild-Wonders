const mongoose = require('mongoose');
const speciesSchema = mongoose.Schema({
  name: String,
  record: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Record'
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
    },
  characteristics: {
    speciestype: String,
    common_name: String,
    color: String,
    weight: String,
    length: String,
    location: String,
  }
},
  {
      timestamps: true
});
const Species = mongoose.model("Species", speciesSchema);
module.exports =  Species ;