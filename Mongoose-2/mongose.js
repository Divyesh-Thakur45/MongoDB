const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product: String,
  price: Number,
  quntiety: Number,
});

const productModel = mongoose.model("product", productSchema);
const connectToDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/shopping");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectToDb, productModel };
