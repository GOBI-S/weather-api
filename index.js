import express from 'express';
import emailRoute from './routes/emailroute.js';
import dbmail from "./lib/database.js"
import connetdb from './lib/database.js';
import Fastify from 'fastify';
import cors from 'cors';
import fastifyCors from 'fastify-cors';
const fastify = Fastify();
const app=express()
const PORT = 3000;
// Enable CORS
fastify.register(cors, { 
  origin: '*', // Allows all origins
  // origin: 'http://localhost:3000' // Restrict to specific origin
});
//data undestanding middle ware 
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('/email',emailRoute);
connetdb();

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});