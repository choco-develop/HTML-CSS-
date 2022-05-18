document.querySelector('button').addEventListener('click',display)
function display(){
let input=document.querySelector('input').value
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s= ${input}`)
     .then(res=>res.json())
     .then(data=>{
         console.log(data)
         document.querySelector('img').src=data.drinks[0].strDrinkThumb
         document.querySelector('h2').innerText=data.drinks[0].strDrink
         document.querySelector('h3').innerText=data.drinks[0].strInstructions
         })

        }         