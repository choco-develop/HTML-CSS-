//recipe api
fetch( 'https://api.spoonacular.com/foods/products/search?query=yoghurt&apiKey=a885d2d611b44560baa4230dc6f1b8bb')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)

    })
    .catch(err=>{
        `error ${err}`
    })