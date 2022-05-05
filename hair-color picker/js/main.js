document.getElementById('blonde').onclick=partyBlonde;
document.getElementById ('gold').onclick=partyGold;
document.getElementById('red').onclick=partyRed;
document.getElementById('brown').onclick=partyBrown;

function partyBlonde(){
    document.querySelector('body').style.backgroundColor='#dfbe1e';
    document.querySelector('h1').style.color='blue';
}
function partyGold(){
    document.querySelector('body').style.backgroundColor='#bf9f6a';
    document.querySelector('h1').style.color='white';
}
function partyRed (){
    document.querySelector('body').style.backgroundColor='#ff69b4';
    document.querySelector('h1').style.color='purple'
}
function partyBrown () {
    document.querySelector('body').style.backgroundColor='#a0522d';
    document.querySelector('h1').style.color='skyblue';
}
   