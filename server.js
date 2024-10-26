import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { nanoid } from 'nanoid';
import Url from './models/Url.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), 'public')));


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));


app.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'public', 'index.html'));
});

app.post('/shorten', async (req, res) => {
    const { originalUrl } = req.body;
    const shortId = nanoid(10);

    try {
        const newUrl = new Url({ originalUrl, shortId });
        await newUrl.save();
        res.json({ shortUrl: `${req.protocol}://${req.get('host')}/${shortId}` });
    } catch (error) {
        console.error('Error saving URL:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/:id', async (req, res) => {
    try {
        const url = await Url.findOne({ shortId: req.params.id });
        if (url) {
            return res.redirect(url.originalUrl);
        }
        res.status(404).send('URL not found');
    } catch (error) {
        console.error('Error retrieving URL:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
