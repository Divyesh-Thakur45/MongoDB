const mongoose = require("mongoose");

const productScema = mongoose.Schema({
  name: String,
  price: Number,
});

const product = mongoose.model("product", productScema);

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/chunnu");
    await product.insertMany([
      { name: "prduct-1", price: 1 },
      { name: "prduct-2", price: 2 },
      { name: "prduct-3", price: 3 },
    ]);
    console.log("Data added successfully");
  } catch (error) {
    console.log(error);
  }
};
connectDB();
