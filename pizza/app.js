//import express
import express from 'express';

//Instantiate an express application 
const app = express();

//Serve static files from the 'public' directory 
app.use(express.static('public'));

//Define a port nimber for our server to listen 
const PORT = 3000;

//Define a "default" route for our home page
app.get('/' , (req,res) =>{
    //Send out home page as a response to the client
    res.sendFile(`${import.meta.dirname}/views/index.html`);
});

//Define a thank you route
app.get('/thankyou', (req, res) => {
    // Send our thank you page
    res.sendFile(`${import.meta.dirname}/views/thankyou.html`);
})

//Tell the server to listen on our specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});