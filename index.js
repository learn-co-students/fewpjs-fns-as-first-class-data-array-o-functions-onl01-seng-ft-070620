const wakeDog = function wakeDog(dogName, dogBreed) {
  const string = `Wake ${dogName} the ${dogBreed}`;
  console.log(string);
  return string;
}

const leashDog = function leashDog(dogName, dogBreed) {
  const string = `Leash ${dogName} the ${dogBreed}`;
  console.log(string);
  return string;
}

const walkToPark = function walkToPark(dogName, dogBreed) {
  const string = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(string);
  return string;
}

const throwFrisbee = function throwFrisbee(dogName, dogBreed) {
  const string = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(string)
  return string;
}

const walkHome = function walkHome(dogName, dogBreed) {
  const string = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(string)
  return string;
}

const unleashDog = function unleashDog(dogName, dogBreed) {
  const string = `Unleash ${dogName} the ${dogBreed}`;
  console.log(string)
  return string;
}

// const routine = [wakeDog(), leashDog(), walkToPark(), throwFresbee(), walkHome(), unleashDog()];
const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  let results = [];
  for (let i = 0; i < routine.length; i++) {
    results.push(routine[i](dogName, dogBreed));
  }
  return results;
}