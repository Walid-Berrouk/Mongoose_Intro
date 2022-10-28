const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ProductSchema = new Schema({
 
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: false
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: "Order"
  },
  price: {
    type: Number,
    required: false
  }
},{
  writeConcern: {
    w: 'majority',
    j: true,
    wtimeout: 1000
  }});

// This creates our model from the above schema, using mongoose's model method
let Product = mongoose.model("Product", ProductSchema);

// Export the Article model
module.exports = Product;