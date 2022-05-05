const myName = "Ose";
const age = 22;

console.log('my name is '+ myName +' and i am ' + age + ' years old');
//template string
const hello=`my name is ${myName} and i am ${age}`;
console.log(hello);

const s= "Hello, World";
//property and methods
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());
console.log(s.substring(7, 12));
//splits a string into an array
console.log(s.split(''));
const menu="lifestyle, travels, food-reciepes, more";
console.log(menu.split(', '));
//Arrays-using a constructor
const numbers=new Array(1,2,3,4,5);
console.log(numbers);
//Array-better way of constructing array
const fruits=[ 'orange ', 'mango', 'pineapple', 'grape',];
console.log(fruits[2]);
fruits[4]= 'guava';
console.log(fruits);
//fruit[2]='apple';
//it is undefined because const can never be reassigned even 
//used in an array,but it can be added to

fruits.push('pear');
console.log(fruits);

//this adds an item to the list/array at the bottom
fruits.push('plum');
console.log(fruits);

//.shift removes the first item from the array
fruits.shift();
console.log(fruits);

//unshifts adds an item to the top of the array list
fruits.unshift('lemon');
console.log(fruits);

//pop removes an item from the bottom of the list
fruits.pop();
console.log(fruits);
//this answers the true or false of fruit as an array
console.log(Array.isArray (fruits) );//note the types of brackets to use
//console.log only takes ()
//arrays has alot of other methods used to 

//objects
const person={
    firstName:'Joe',
    lastName:'Doe',
    age:22,
    hobbies:['swimming', 'cooking', 'reading'],
    //hobbies is an array inside an object
    address: {
    street:" 50 main street",
    city: 'Bouston',
    state:':XYZ',
    }
    //address is an object inside an objest-embedded object.
}
 console.log(person);
 console.log(person.firstName);
 console.log(person.hobbies[2]);
 console.log(person.address.street);

 //directly addinga new property
 //it uses the syntax of reassigning variable
 person.email="john@gmail.com";
 console.log(person);

 //Array of objects
 const toDo=[
    {id:1,
     task:"cooking",
     completed:"true",
    },
    {
    id:2,
    task:"leisure",
    completed:"true",
    },
    {
    id:3,
    task:"coding",
    completed:"false",
     },
    /*
    this is an array that has 3 objects inside.
     that is to say an array can comprise of objects
     {id:2,
    task:"leisure",
    completed:"false",
    }
    the above forms an object 
    */
]
console.log(toDo);

/*
JSON is a way of transmitting data to the server
JSON.stringify is a way of converting a js array to json array.
*/
const toDoJSON=JSON.stringify(toDo);
console.log(toDoJSON);

//loops
//for-loop:
for(let i =0;i <9; i++){
    //prints each iteration of i to the console
    console.log(i); 
}
for(let i =7;i <100; i++){
    //note that it begins to read fron the initialization value to condition boundary
    console.log(i); 
}
/*for(let i =0;; i++){
      //infinite loop:no condition,no `break` statement
   console.log(i); 
}
*/

//to stop an infinite loop,add an if statement
for(let i =0;; i++){
   if (i>50){
       break;
   }
    console.log(i); 
}


//while-loop
let i=0;
while(i<9) {
    i++;
    console.log(i);
}
const popLimit=100;
let fish=0;
while(fish<popLimit){
    fish++;
    console.log(`There is room for ${popLimit - fish} more fish`)
}
//Loops and Arrays

//looping through an array
let counter=[];
for(let i=0;i<5;i++){
    counter.push(i);
    console.log(counter);
}
let myNumbers=[1,2,3,4,5];
for(let i=0;i<myNumbers.length;i++){
    console.log(i);
}
for(i=0; i<toDo.length;i++){
    console.log(toDo[i]);
    console.log(toDo[i].task);
    console.log(toDo[i].id);
    console.log(toDo[i].completed);
}
//for..of:iterates over objects like arrays and strings

const seaAnimal=["great-white","white", 2000];
for(characteristics of seaAnimal){
    console.log(characteristics)
}
for(activities of toDo){
    console.log(activities)
    console.log(activities.task)
}

//for..in:iterates over an object property
const shark={
    species:"great white",
    color:"white",
    numberOfTeeth:2000
}
for( attributes in shark);{
    console.log(attributes);
}
for(attributes in shark);{
    console.log(shark[attributes]);
}
for(attributes in shark);{
    console.log(`${attributes}`.toUpperCase() + `:${shark[attributes]}`);
    console.log(`${attributes.toUpperCase()}:${shark[attributes]}`);
    /*The intention was to print all the property and values,
    but only the last seems to be printing...why????
    read more on this! */
}
//forEach
toDo.forEach(function (toDo,) {
    console.log(toDo);
})
toDo.forEach(function (toDo,index) {
    console.log(toDo.task);
})
toDo.forEach(function (toDo,index) {
    console.log(toDo.completed);
}
)




