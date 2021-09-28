const Business = require('./models/Business');

const getBlala = async (req, res, next) => {
  try {
    const stations = await Business.find();
    console.log(stations);
  } catch (error) {
    console.log(error.message);
  }
};

getBlala();
