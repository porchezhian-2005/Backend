import express from 'express';
const app = express();
app.use(express.json())
app.get('/api',(req, res)=>{
    res.send("API creation")
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Server is running");
    
})