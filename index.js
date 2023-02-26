// Number 1
// Create an InstagramPost() constructor function

function InstagramPost(authorHandle, content, imageLink, numberOfViews, numberOfLikes) {
  this.authorHandle = authorHandle,
  this.content = content,
  this.imageLink = imageLink,
  this.numberOfViews = numberOfViews,
  this.numberOfLikes = numberOfLikes;
}

// NUMBER 2
// Create 2 Instagram post objects from the constructor function you created above

const firstPost = new InstagramPost("Praise", "video", "image5", 1540, 1000);

const secondPost = new InstagramPost("Tenedor", "Hello people", "image3", 4580, 2735);


// NUMBER 3a
// Using the factory method, implement a createPerson() factory function

function createPerson(name, age, location){
  return{
    name: name,
    age: age,
    location: location
  }
}

const musa = createPerson("Musa Dawodu", 19, "Lekki-Lagos");

// NUMBER 3b
// Factory Function to create JAMB scores
function createJambScores(eng, govt, lit, crk){
  return{
    eng: eng,
    govt: govt,
    lit: lit,
    crk: crk
  }
}
// Creating Musa's Jamb scores
const musaJambScores = createJambScores(70, 85, 82, 94);

// Adding the Jamb score object as a property to musa object.
musa.jambScores = musaJambScores;


// NUMBER 4
// What are the different ways you can clone an object? Give examples for each of them.
// ANSWERS
// I. Using the Object.assign method
const benz = {
  color: "black",
  model: "GLC-2023",
  nightView: true
}
const newBenz = Object.assign({}, benz);
console.log(newBenz);

// II. Using the spread operator
const anotherBenz = {...benz};
console.log(anotherBenz);

// III. Using the for..in loop
const anotBenz = {};
for(let key in benz){
  anotBenz[key] = benz[key];
}
console.log(anotBenz);

// IV. Using JSON.parse(JSON.stringify())
const benz2 = JSON.parse(JSON.stringify(benz));
console.log(benz2);

// NUMBER 5
// Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates

const presidentialCandidates = {
   AAC: 'Omoyele Sowore',
   ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
}

for(let key in presidentialCandidates){
  console.log(`${presidentialCandidates[key]} is the presidential candidate of ${key}`)
}