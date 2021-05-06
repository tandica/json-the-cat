const request = require('request');

//implement the breed to be entered on the command line
const args = process.argv
const breed = args[2]

function catBreed() {

    request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    // Print the error if one occurred
    if (error) {
        console.log(error)
    }
  //print the html from the websites which provides info about the desired cat breed
  //console.log('body:', body);

  //convert the data to an object
  const data = JSON.parse(body);
  //console.log(typeof data);

  //access the specific data needed to describe the breed
  //console.log(data[0]['description']);

  //if breed name exists, print the description. if not, print that its not found
  const breedName = data[0];
  if(breedName) {
      console.log(breedName.description);
  } else {
      console.log(`${breedName} name not found`);
  }
});
}

catBreed()