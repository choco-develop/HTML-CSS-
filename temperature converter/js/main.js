//Pseudo code
/*get temperature in celsius-----
This is done by calling the HTML tag that has the celsius value
---i.e variable declaration*/
function convert(){
    let temperature = document.querySelector('#temp').value;
    //convert cel to F
    /*Re-assign the variable to perform the conversion
    --temperature is repeated because the variable declared picks up
    a value from the DOM and calls it temperature and its this same temp
    that is converted when the event happens so it is reassigned to give 
    temperature on fahrenheit */
    temperature= temperature * 9/5 +32;
    //display result
    document.querySelector('#fahrenheit').innerText=temperature;

}
//Event
document.querySelector('#convert').addEventListener('click', convert);








