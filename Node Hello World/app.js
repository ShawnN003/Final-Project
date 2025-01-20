import express from 'express'

const app = express();

app.use(express.static("public"));


app.get('/',(req,res)=>{
    //res.send('<h1>Hello World this is a title</h1>')
    res.sendFile(`${import.meta.dirname}/Views/home.html`);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
});