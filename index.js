const { fetchBreedDescription } = require('./breedFetcher');

const args = process.argv
const breed = args[2]

fetchBreedDescription(breed, (error, breedName) => {
    if (!error) {
        console.log(breedName);
    } else {
      console.log('Error details:', error);
    }
  });
