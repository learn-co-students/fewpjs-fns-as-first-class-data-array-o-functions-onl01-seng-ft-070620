function wakeDog(dogName, dogBreed) {
  let strng = `Wake ${dogName} the ${dogBreed}`;
  console.log(strng);
  return strng
}

function leashDog(dogName, dogBreed) {
  let strng = `Leash ${dogName} the ${dogBreed}`;
  console.log(strng);
  return strng
}

function walkToPark(dogName, dogBreed) {
  let strng = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(strng);
  return strng
}

function throwFrisbee(dogName, dogBreed) {
  let strng = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(strng);
  return strng
}

function walkHome(dogName, dogBreed) {
  let strng = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(strng);
  return strng
}

function unleashDog(dogName, dogBreed) {
  let strng = `Unleash ${dogName} the ${dogBreed}`;
  console.log(strng);
  return strng
}

const routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
]

function exerciseDog(dogName, dogBreed) {
  return routine.map(fn => fn(dogName, dogBreed))
}