const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const methodOverride = require('method-override');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const stationsRouter = require('./routes/stations');
const businessRouter = require('./routes/business');

const app = express();

// Body parser
app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/stations', stationsRouter);
app.use('/api/v1/business', businessRouter);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
