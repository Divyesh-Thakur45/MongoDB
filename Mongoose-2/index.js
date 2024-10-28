const express = require("express");
const { productModel, connectToDb } = require("./mongose");

const app = express();

app.use(express.json());

// Post Data Into Database
app.post("/product", async (req, res) => {
  try {
    await productModel.insertMany(req.body);
    res.send("Data inserted successfully");
  } catch (error) {
    console.log(error);
  }
});

// Read Data into Database
app.get("/", async (req, res) => {
  try {
    const data = await productModel.find();
    console.log(data);
    res.send("Data found successfully");
  } catch (error) {
    console.log(error);
  }
});

// Delete Data from Database
app.delete("/product", async (req, res) => {
  try {
    await productModel.deleteOne({ price: 400 });
    res.send("Data deleted successfully");
  } catch (error) {
    console.log(error);
  }
});

// Update Data from Database
app.patch("/product", async (req, res) => {
  try {
    await productModel.updateOne({ price: 800 }, { $set: { price: 400 } });
    res.send("Data updated successfully");
  } catch (error) {
    console.log(error);
  }
});
app.listen(8080, async () => {
  try {
    await connectToDb();
    console.log("Server is running on port 8080");
  } catch (error) {
    console.log(error);
  }
});
