import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";

const app = express();

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dfxc3sati",
  api_key: "787799863893888",
  api_secret: "d7nIXfqJJu_Gml_EMgIhY5lRE98",
});

mongoose
  .connect(
    "mongodb+srv://codesnippet02:nq0sdJL2Jc3QqZba@cluster0.zmf40.mongodb.net/",
    {
      dbName: "NodeJs_Mastery_Course",
    }
  )
  .then(() => console.log("MongoDb Connected..!"))
  .catch((err) => console.log(err));

// rendering ejs file
app.get("/", (req, res) => {
  res.render("index.ejs", { url: null });
});

const storage = multer.diskStorage({
//   destination: "./public/uploads",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const imageSchema = new mongoose.Schema({
  filename: String,
  public_id: String,
  imgUrl: String,
});

const File = mongoose.model("cloudinary", imageSchema);

app.post("/upload", upload.single("file"), async (req, res) => {
  const file = req.file.path;

  const cloudinaryRes = await cloudinary.uploader.upload(file, {
    folder: "NodeJS_Mastery_Course",
  });

  // save to database
  const db = await File.create({
    filename: file.originalname,
    public_id: cloudinaryRes.public_id,
    imgUrl: cloudinaryRes.secure_url,
  });

  res.render("index.ejs", { url: cloudinaryRes.secure_url });

  // res.json({message:'file uploaded successfully',cloudinaryRes})
});

const port = 1000;
app.listen(port, () => console.log(`server is running on port ${port}`));
