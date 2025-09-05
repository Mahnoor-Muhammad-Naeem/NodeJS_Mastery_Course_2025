import express from "express";
import path from 'path'

const app = express();

const products = [
  { title: "iphone - 15", price: 75000 },
  { title: "Oneplus - 12", price: 45000 },
  { title: "Google pixel", price: 55000 },
];

// send response
app.get("/", (req, res) => {
//   res.json({
//     message: "fetched all products",
//     jo_chahe: "de skte hai",
//     products: products,
//     success:true
//   });

// res.send('<h1>This is your response</h1>')

const dir = path.resolve();

// console.log("my path = ",dir)

const url = path.join(dir,'./index.html')

console.log("full path = ",url)

const name = 'ram'

res.sendFile(url)

});

const port = 1000;

app.listen(port, () => console.log(`server is running on port ${port}`));
