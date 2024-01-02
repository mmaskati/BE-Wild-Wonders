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
    distinctive_feature: String,
    habitat: String,
    predators: String,
    favorite_food: String,
    main_prey: String,
    slogan: String,
    lifestyle: String,
    skin_type: String,
    top_speed: String,
    lifespan: String,
  },
  notes: String,
  show: { type: Boolean, default: true },
  photo: String,

},
  {
      timestamps: true
});
const Species = mongoose.model("Species", speciesSchema);

module.exports =  {Species} ;