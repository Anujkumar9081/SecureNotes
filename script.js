const express = require("express");
const jwt = require("jsonwebtoken")
const app = express();
const cors = require("cors");

app.use(express.static("frontend")) 
app.use(express.json()); 
app.use(cors()); 

const notes = [];
const user = [];

//for the sigup
app.post("/signup" , function(req , res){
  const username = req.body.username;
  const password = req.body.password;

  const userexist = user.find(function(e){
   return e.username === req.body.username;
  })
  if(userexist){
    res.status(403).json({
      message:"User id already exist"
    })
  }
  else{
    user.push({ username: req.body.username, password: req.body.password })
    res.json({
      message:"account is created"
    })
  }
})

//for the login page 
app.post("/login" , function(req , res){
  const username = req.body.username;
  const password = req.body.password;

  const exist = user.find(function(e){
    return e.username === username && e.password === password
  })
  if(!exist){
    res.status(404).json({
      message:"user is not defined"
    })
    return;
  }
  const token = jwt.sign({
      username: req.body.username,
  }, "secretkey")
  
  res.json({
    token: token
  })
})

// for the create the note and add to box
app.post("/notes" , function(req , res){
  const token = req.headers.token;
  if(!token){
    res.status(401).json({message:"Unauthorized"})
    return;
  }

  const decode = jwt.verify(token , "secretkey");
  if(!decode){
    res.status(403).send("malformed token")
    return;
  }

  const note = req.body.note;
  
  notes.push({ note: note, username: decode.username })
  res.json({message:"done"})
})

// when initially when you come to frontend to see your past notes
app.get("/notes" , function(req , res){
  const token = req.headers.token;
  if(!token){
    res.status(401).json({message:"Unauthorized"})
    return;
  }

  const decode = jwt.verify(token , "secretkey");
  if(!decode){
    res.status(403).send("malformed token")
    return;
  }

  const notes_person = notes.filter(function(e){
    return e.username === decode.username    
  })

  res.json({notes: notes_person})
})

app.get("/" , function(req , res){
  res.redirect("/notes.html")
})
app.delete("/notes" , function(req , res){
    notes.length = 0;
    res.json({message:"notes are deleted"})
})

app.listen(3000);