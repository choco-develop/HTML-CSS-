
document.getElementById('sunny').onclick = weatherSunny;

function weatherSunny() {
    document.querySelector('body').style.backgroundImage="url('img/sunny.jpg') ";
    document.querySelector('body').style.backgroundRepeat='no-repeat';
    document.querySelector('body').style.backgroundSize="100%"
}
   
document.getElementById('rainy').onclick=weatherRainy;
function weatherRainy() {
    document.querySelector('body').style.background="url('img/rainy.jpg') ";
    document.querySelector('body').style.backgroundRepeat='no-repeat';
    document.querySelector('body').style.backgroundSize="100%"
   
}
document.getElementById('stormy').onclick =weatherStormy;
function weatherStormy (){
    document.querySelector('body').style.background="url('img/stormy.jfif')";
    document.querySelector('body').style.backgroundRepeat="no-repeat";
    document.querySelector('body').style.backgroundSize="100%"
}
    