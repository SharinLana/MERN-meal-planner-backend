const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
});

const MealModel = mongoose.model("MealModel", mealSchema);

module.exports = MealModel;
