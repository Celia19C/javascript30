//start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;                  //Si copias el original solo se modifica ese,
console.log(age,age2);      //no la copia. Esto ocurre con strings, numbers, booleasnos
                            //undefinedy null, los valores primitivos.
let name = 'Wes';
let name2 = name; 
console.log(name,name2);
name = 'Wesley';
console.log(name, name2)



//Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poopy'];

//and we want a copy of it.
const team = players;
console.log(players, team);

//You migth think we can just do something like this.
// team[3] = 'Lux'
console.log(players, team)  // Cambia la copia y original porque cambia la referencia

//however what happens when we update that array?


//now gere is the problem!


//oh no - we have edited the original array too!

//Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we to fix this? We take a copy instead!
const team2 = players.slice() //haces una copia del array original

// one day

// or create a new arrary and concat the old one in
const team3= [].concat(players);  //haces una copia del array original

// or use the new ES6 Spread
const team4 = [...players];  //haces una copia del array original
team4[3] = 'eeehhh'
console.log(team4)

const team5 = Array.from (players)
team5[3] = 'Pipa';
console.log(team5);
//now when we update it, the original one isn't changed


//The same thing goes for objetcs, let's say we have a person object

//with objects
const person = {
    name: 'Wes Bos',
    age: 80
};

//and think we make a copy:
// const captain = person;
// captain.number = 99;        //se añade los dos por que no es una copia, sino que hace referencia al original y lo añade
// console.log(person, captain);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, {number: 99, age: 12});
console.log(cap2, person)

//We will hopefully soon see the object ....spread
const cap3 = {...person};

//Things to note - this is only 1 level deep - both for arrays and objects
//Lodash has a cloneDeep methid, bu you should think twice before using it.

const wes = {
    name: 'Wes',
    age: 100,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
}
console.clear();
console.log(wes);

const dev = Object.assign({}, wes)

const dev2 = JSON.parse(JSON.stringify(wes))

