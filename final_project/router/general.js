const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  
  users.push({"username":req.body.username,"password":req.body.password});
  return res.send("Customer succesfully registered, you can login");
  return res.status(300).json({message: "Yet to be implemented"});
});

public_users.post("/reviewadded", (req,res) => {
    //Write your code here
    for(i = 1;i<=10;i++)
  {
    if(books[i].ISBN==req.query.isbn)
    {
        let newreview = {"user":"erick","review":req.query.review}
        books[i].review=newreview;
        return res.send("new review added " + req.query.review);
    }
  }
    //return res.status(300).json({message: "Yet to be implemented"});
  });

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  const methCall = new Promise((resolve,reject)=>{
    
    try {
      const data = books; 
      resolve(data);
    } catch(err) {
      reject(err)
    }
    });

methCall.then(
  (data) => {return res.send(JSON.stringify(data, null, "\t"));},
  (err) => console.log("Error") 
);
  
  //return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here 
  const methCall = new Promise((resolve,reject)=>{
    try {
        return resolve(books[req.params.isbn]);
    }
    catch(err) {
        reject(err)
    }
  });
  methCall.then(
      (data) => {return res.send(JSON.stringify(data, null, "\t"));},
      (err) => console.log(err) 
    );
  
  //return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here 
  const methCall = new Promise((resolve,reject)=>{
    let authors = [];
    try {
        Object.keys(books).forEach(key => {
            if(books[key].author==req.params.author){
                authors.push(books[key]);
            }
            return resolve(authors);
        });    
    }
    catch(err) {
        reject(err)
    }
  });
  methCall.then(
      (data) => {return res.send(JSON.stringify(data, null, "\t"));},
      (err) => console.log(err) 
    );
  
  //return res.status(300).json({message: "Yet to be implemented"});
 });

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here 
  const methCall = new Promise((resolve,reject)=>{
    try {
        Object.keys(books).forEach(key => {
            if(books[key].title==req.params.title){
                return resolve(books[key]);
            }
        });    
    }
    catch(err) {
        reject(err)
    }
  });
  methCall.then(
      (data) => {return res.send(JSON.stringify(data, null, "\t"));},
      (err) => console.log(err) 
    );
  
  //return res.status(300).json({message: "Yet to be implemented"});
 });

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.send(JSON.stringify(books[req.params.isbn].reviews));
  //return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
