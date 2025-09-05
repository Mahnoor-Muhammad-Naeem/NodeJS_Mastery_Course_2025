import { readFile, writeFile,appendFile,mkdir } from "fs/promises";

// Read File Content
const read_file = async (fileName) => {
  const data = await readFile(fileName, "utf-8");
  console.log(data);
};

// read_file('sample.txt')

// Create file
const create_file = async (fileName,content) =>{
 await writeFile(fileName,content)
 console.log("File created Successfully..!")
}

// create_file('ai.py','this is a testing file')
// create_file('App.jsx','this is a React File')

// add content to file
const append_File = async (fileName,content) =>{
 await appendFile(fileName,content);
 console.log("extra content added successfully...!")
}

// append_File('App.jsx', " This is my extra content")


// create folder - directory
const create_dir = async (dir) =>{
await mkdir(dir,{recursive:true})
}
// create_dir('public') 
create_dir('src/py') 

// src/components/java