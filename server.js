const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const mealRoutes = require("./routes/MealRoutes");

require("dotenv").config();

// CONNECT mongoose TO MongoDB
mongoose.set("strictQuery", true); 

const PORT = 7000 || process.env.port;

// PARSER
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

// ROUTING (define after PORT)
app.use(mealRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
