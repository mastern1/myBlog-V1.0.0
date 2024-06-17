import sharp from "sharp";
import express from "express";
import { localsName, name } from "ejs";
const app = express();
const port = 3000;
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/",(req, res) =>{
  
    res.render("index.ejs");
    
});

app.get("/posting",(req, res) =>{


 res.render("partials/post.ejs");
})

app.post("/post",(req, res) =>{
 

res.render("index.ejs", req.body)
 
 
  
})


app.listen(port, () =>{
  console.log(`This server running on port ${port} `);
});