import express from "express";
import mongoose from "mongoose";
import { userRegister } from "./controllers/user.js";

const app = express();
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://codesnippet02:nq0sdJL2Jc3QqZba@cluster0.zmf40.mongodb.net/",
    {
      dbName: "NodeJs_Mastery_Course",
    }
  )
  .then(() => console.log("MongoDb Connected..!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/form-submit", userRegister);

const port = 1000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
