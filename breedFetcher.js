const request = require('request');

const args = process.argv;
const breed = args[2];

const fetchBreedDescription = function(breed, callback) {

    request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
        callback(error, null);
    } 

  const data = JSON.parse(body);

  const breedName = data[0];
  if (breedName) {
      callback(null, breedName.description);
  } else {
      callback(null, 'breed name not found');
  }
}); 
}

//fetchBreedDescription()

module.exports = { fetchBreedDescription };
