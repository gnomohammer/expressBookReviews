const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  users.forEach(element => {
    if(element.username == req.query.username && element.password == req.query.password)
    {
        let accessToken = jwt.sign({data: element.password}, 'access', { expiresIn: 60 * 60 });
        let username = element.username;
        req.session.authorization = {
            accessToken,username
        }    
        return res.send("OK");
    }
  });
  return res.status(300).json({message: "User does not exist"});
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  for(i = 1;i<=10;i++)
  {
    if(books[i].ISBN==req.params.isbn)
    {
        let newreview = {"user":"erick","review":req.query.review}
        books[i].review=newreview;
        return res.send("new review added " + req.query.review);
   }
  }
  return res.status(300).json({message: "Yet to be implemented"});
});

regd_users.delete("/auth/review/:isbn", (req, res) => {
    //Write your code here
    for(i = 1;i<=10;i++)
    {
      if(books[i].ISBN==req.params.isbn)
      {
          let newreview = {}
          books[i].review=newreview;
          return res.send("review deleted ");
     }
    }
    return res.status(300).json({message: "Yet to be implemented"});
  });

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
