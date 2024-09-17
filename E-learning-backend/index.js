import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js';
import userRoutes from './src/routers/User.js';




dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));


app.get('/',(req,res)=>{
  res.send('hello world')
});

app.get('/api',(req,res)=>{
res.send("hi ");
});
app.post('/api/user',userRoutes)


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
