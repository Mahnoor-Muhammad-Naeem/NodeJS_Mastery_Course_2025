import express from 'express'
import mongoose from 'mongoose';

const app = express();

mongoose.connect(
  "mongodb+srv://codesnippet02:nq0sdJL2Jc3QqZba@cluster0.zmf40.mongodb.net/",{
    dbName:"NodeJs Mastery Course"
  }
).then(()=>console.log("MongoDb Connected..!")).catch((err)=>console.log(err))

const port = 1000;
app.listen(port,()=>console.log(`Server is running on port ${port}`))