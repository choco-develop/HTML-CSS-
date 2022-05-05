//get date of birth
function calculate(){
    let currentAge=document.querySelector("#birthYear").value;
    //calculate age
    let cYear=new Date().getFullYear();
    currentAge=cYear -currentAge;
    //show age
    document.querySelector('#age').innerText=currentAge;
}

document.querySelector('#calculate').addEventListener('click',calculate)


/*to print current year in js
without the getFullYear method,it prints currentdate+time
let cYear=new Date().getFullYear();
console.log(cYear);
*/