const axios = require('axios');

const getData = async () => {
  const data = await axios.get(
    'https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&q=&rows=25'
  );
  console.log(data);
};

getData();
