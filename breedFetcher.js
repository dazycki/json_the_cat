const request = require('request');

const args = process.argv.slice(2); //take in argument from command line
const BREED = String(args[0]);

request(`https://api.thecatapi.com/v1/breeds/search?q=${BREED}`, (error, response, body) => {
  if (error) {
    console.log(error);
  }
  
  const data = JSON.parse(body);
  
  if (data.length === 0) {
    console.log('Cat breed not found, please try again!');
  } else if (data) {
    console.log(data[0]['description']);
  }
});
