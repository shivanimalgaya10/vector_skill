require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const empRoutes = require('./routes/employees');
const errorHandler = require('./middleware/errorMiddleware');

const app = express();
app.use(cors());
app.use(express.json());

// connectDB(process.env.MONGO_URI);

app.use('/api/auth', authRoutes);
app.use('/api/employees', empRoutes);

app.get('/', (req, res) => res.send('HR Yathest Alliance API is running'));

app.use(errorHandler);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));