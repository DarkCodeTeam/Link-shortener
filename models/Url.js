import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    default: () => nanoid(), 
    unique: true,
  },
});

const Url = mongoose.model('Url', urlSchema);
export default Url;
