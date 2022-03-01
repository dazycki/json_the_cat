const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error);
    }
    
    const data = JSON.parse(body);
    
    if (data.length === 0) {
      callback('Cat breed not found, please try again!');
    } else if (data) {
      callback(error, data[0]['description']);
      console.log(error);
    }
  });
};

module.exports = { fetchBreedDescription };