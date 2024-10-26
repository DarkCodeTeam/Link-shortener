import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Url from './models/Url.js';

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3001;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  const url = new Url({ originalUrl });
  await url.save();

  const shortUrl = `http://localhost:${PORT}/${url.shortUrl}`;
  
  res.json({ shortUrl });
});


app.get('/:id', async (req, res) => {
  const url = await Url.findOne({ shortUrl: req.params.id });
  if (url) {
    return res.redirect(url.originalUrl);
  }
  res.status(404).send('URL not found');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
