require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const weaponRoutes = require('./routes/weaponRoutes');
const officerRoutes = require('./routes/officerRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors())

// Routes
app.use('/api/weapons', weaponRoutes);
app.use('/api/officers', officerRoutes);
app.use('/api/transactions', transactionRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection error:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
