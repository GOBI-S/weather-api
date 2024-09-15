import express from 'express';
import emailRoute from './routes/emailroute.js';
import dbmail from "./lib/database.js"
import connetdb from './lib/database.js';
const app=express()
const PORT = 3000;
//data undestanding middle ware 
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/email',emailRoute);
connetdb();

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});