// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose'); // Import mongoose

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;

async function connectDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Increase timeout to 5 seconds
      connectTimeoutMS: 10000, // Increase connection timeout to 10 seconds
    });
    console.log("Connected to MongoDB Atlas");
    console.log("MongoDB connection state:", mongoose.connection.readyState === 1 ? "Connected" : "Disconnected");
  } catch (e) {
    console.error("MongoDB connection error:", e);
  }
}

connectDB();

const authRouter = require('./routes/auth');
const eventsRouter = require('./routes/events');

app.use('/auth', authRouter);
app.use('/events', eventsRouter);

app.get('/', (req, res) => {
  res.send('Event Discovery App Backend is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});