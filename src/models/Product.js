const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model('Product', ProductSchema);
