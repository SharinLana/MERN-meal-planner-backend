const { Router } = require("express");
const {
  getAllMeals,
  addNewMeal,
  deleteMeal,
  updateMeal,
} = require("../controllers/mealControllers");
const router = Router();

router.get("/", getAllMeals);
router.post("/add-meal", addNewMeal);
// router.delete("/delete-meal", deleteMeal);
router.post("/delete-meal", deleteMeal); // better use "post" method for deleting
router.put("/edit", updateMeal);

module.exports = router;
