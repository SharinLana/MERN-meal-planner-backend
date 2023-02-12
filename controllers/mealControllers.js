const MealModel = require("../models/MealModel");

// GET
module.exports.getAllMeals = async (req, res) => {
  const meals = await MealModel.find();
  res.send(meals);
};

// POST
module.exports.addNewMeal = async (req, res) => {
  const { title } = req.body; // title came from the MealModel/Schema

  // Creating a title
  MealModel.create({ title }).then((data) => {
    console.log("Meal added!");
    res.send(data);
  });
};

// DELETE
module.exports.deleteMeal = async (req, res) => {
  const { _id } = req.body;

  MealModel.findByIdAndDelete(_id).then(() => res.send("Meal deleted!"));
};

// UPDATE
module.exports.updateMeal = async (req, res) => {
  const { _id, title } = req.body;

  await MealModel.findByIdAndUpdate(_id, { title });
  //  then we have to find this updated meal in the database
  //   and display it in the Postman console:
  const updatedMeal = await MealModel.findById(_id);

  res.send(updatedMeal);
};
