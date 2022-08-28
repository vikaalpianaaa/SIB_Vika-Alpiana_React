// Destructuring Object
const user = {};
user.name = "Vika Alpiana";
user.email = "Vikaalpiana@gmail.com";
user.location = "Grobogan, Jawa Tengah";

// extraction
const name = user.name;
const email = user.email;
const location = user.location;
console.log(name, email, location);

// Object Literals
const mhs = {
  mhsName: "Vikaalpiana",
  mhsEmail: "Vikaalpiana@gmail.com",
  mhsLocation: "Grobogan, Jawa Tengah",
};

// console.log(mhsName, mhsEmail, mhsLocation);

// Extraction - Destructuring
const { mhsName, mhsEmail, mhsLocation } = mhs;
console.log(mhsName, mhsEmail, mhsLocation);

// Destructuring Function Result
const getUser = () => {
  return {
    namaUser: "Vika Alpiana",
    emailUser: "Vika Alpiana@gmail.com",
    alamatUser: "Grobogan, Jawa Tengah",
  };
};

// Extraction
const { namaUser, emailUser, alamatUser } = getUser();
console.log(namaUser, emailUser, alamatUser);

// Destructuring Array
const csv = "2003,Ford,F350,Must Sell!";

const [year, make, model, description] = csv.split(",");

// Aliasing Object Properties
const user2 = {
  n: "Vika Alpiana",
  e: "Vikaalpiana@gmail.com",
  l: "Grobogan, Jawa Tengah",
};

// Extraction
const { n: nama, e: mail, l: lokasi } = user2;
console.log(nama, mail, lokasi);

// This
function changeColor() {
  this.document.body.style.backgroundColor = "#bada55a";
}

// Function Declaration
function add(a, b) {
  return a + b;
}

// function Expression
const add2 = function (a, b) {
  return a + b;
};

// Arrow Function
const add3 = (a, b) => {
  return a + b;
};

// Implict Return
const add4 = (a, b) => a + b;
const square = (x) => x * x;
const three = () => 3;

const add5 = (a, b) => {
  const temp = a + b;
  return temp;
};

console.log(add5(3, 3));

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}

// const p = new Person();

// Higher-Order Function

const printTrick = () => {
  console.log("Tick");
}; 1000;

// setInterval(printTrick, 1000);

// Filter

const animals1 = [
  {name: "Fluffy", species: "cat"},
  {name: "Carlo", species: "dog"},
  {name: "Nemo", species: "fish"},
  {name: "Hamilton", species: "dog"},
  {name: "Dory", species: "fish"},
  {name: "Ursa", species: "cat"},
];

// let fish = [];
// for (let i = 0; i < animals.length; i++) {
//   if (animals[i].species === "fish") {
//     fish.push(animals[i]);
//   }
// }

let fish = animals1.filter((animal1) => animal1.species === "fish");

console.log(fish);

// Map
const animals2 = [

  {name: "Fluffy", species: "cat"},
  {name: "Carlo", species: "dog"},
  {name: "Nemo", species: "fish"},
  {name: "Hamilton", species: "dog"},
  {name: "Dory", species: "fish"},
  {name: "Ursa", species: "cat"},
];

let names = animals2.map((animal2) => animal2.name);
console.log(names);

let names2 = animals2.map(
  (animal2) => animal2.name + "is a " + animal2.species
);

console.log(names2);

// Reduce
let orders = [
    { total: 325 },
    { total: 512 },
    { total: 128 },
    { total: 32 }
];


//let total = 0;
//for (let i = 0; i < orders.length; i++) {
//   total = total + orders[i].total; 
// }
//console.log(total);

let total = orders.reduce((total,order) => total + 
order.total, 0 );
console.log(total);