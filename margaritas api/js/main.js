fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
     .then(res=>res.json())
     .then(data=>{
         console.log (data.drinks)
         console.log(data.drinks[0])
         console.log(data.drinks[0].strDrink)
     })


fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
     .then(res=>res.json())
     .then(data=>{
         document.querySelector('img').src=data.drinks[5].strDrinkThumb
         document.querySelector('h2').innerText=data.drinks[5].strDrink
         document.querySelector('h3').innerText=data.drinks[5].strInstructions
            
        })    
        .catch(err=>{
            console.log(`error ${err}`)
        })