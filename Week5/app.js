const express=require('express');

const app=express();
const PORT=3000;
app.get('/',(req,res)=>{
    res.send('Hello World');
});

/* 5.the about route: this handles the about page */
app.get('/about',(req,res)=>{
    res.send('This is the about page');
});

/*    6.The data (JSON) route
Modern apps often send data instead of the text
.json() method sends a JSON response. This method also sets the Content-Type header to application/json. */

app.get('/api/status',(req,res)=>{
    res.json({
        active:true,
        version:"1.0.0",
        message:"The server is fine and responding"

    });
});
/**
 * 7.starting the server
 * this line actually turns the server on
 */
app.listen(PORT,() =>{
  //this message only appears on ypur terminal not browser
  console.log(`Success! server is running at http://localhost:${PORT}`);
  
});
