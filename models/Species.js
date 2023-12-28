const mongoose = require('mongoose');

const speciesSchema = mongoose.Schema({
  name: String,
  record: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Record'
  },
  "characteristics": {
    "type": String,
    "location": String,
  }
},
  {
      timestamps: true


});
const Species = mongoose.model("Species", speciesSchema);

module.exports = { Species };