const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorHandler');
const vicePresidentRoutes = require('./routes/vicePresidentRoutes');
const presidentRoutes = require('./routes/presidentRoutes');
const memberRoutes = require('./routes/memberRoutes');
const strategicCoordinatorRoutes = require('./routes/strategicCoordinatorRoutes');
const leaderRoutes = require('./routes/leaderRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes); 
app.use('/api/vicePresidents', vicePresidentRoutes);
app.use('/api/presidents', presidentRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/strategicCoordinators', strategicCoordinatorRoutes);
app.use('/api/leaders', leaderRoutes);
// Manejo de errores
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
