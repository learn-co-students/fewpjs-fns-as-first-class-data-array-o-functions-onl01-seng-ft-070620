function wakeDog(dogName, dogBreed) {
  let str = `Wake ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}

function leashDog(name, breed) {
  let str = `Leash ${name} the ${breed}`;
  console.log(str);
  return str;
}

function walkToPark(name, breed) {
  let str = `Walk to the park with ${name} the ${breed}`;
  console.log(str);
  return str;
}

function throwFrisbee(name, breed) {
  let str = `Throw the frisbee for ${name} the ${breed}`;
  console.log(str);
  return str;
}

function walkHome(name, breed) {
  let str = `Walk home with ${name} the ${breed}`;
  console.log(str);
  return str;
}

function unleashDog(name, breed) {
  let str = `Unleash ${name} the ${breed}`;
  console.log(str);
  return str;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  let arr = [];
  for (let i = 0; i < routine.length; i++) {
    arr.push(routine[i](dogName, dogBreed));
  }
  return arr;
}
