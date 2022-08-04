//fetch NASA Data
document.querySelector('button').addEventListener('click',getData)
function getData(){
const date=document.querySelector('input').value

fetch(`https://api.nasa.gov/planetary/apod?api_key=2kB4IfVhavqNYj8bVs5RlbOCtlhWK3HOPQNuOdSw&date=${date}`)
     .then(res=>res.json())
     .then(data=>{
        console.log(data)
        if('media_type===image'){
            document.querySelector('img').src=data.url;
         }
        else if('media_type=== video'){
            document.querySelector('iframe').src=data.hdurl;
        }
        document.querySelector('h3').innerText=data.explanation
     })
     .catch(err=>{
        console.log(`error${err}`)
     })

    }