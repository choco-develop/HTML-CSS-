document.getElementById('purple').onclick=showPurple;
document.getElementById('green').onclick=showGreen;
document.getElementById('blue').onclick=showBlue;

function showPurple(){
  document.querySelector('body').style.backgroundColor='rgba(241,63,247,1)';
  document.querySelector('body').style.color="white";
} 

function showGreen() {
  document.querySelector('body').style.backgroundColor='rgba(0,253,81,1)';
  document.querySelector('body').style.color="white";
}
function showBlue() {
  document.querySelector('body').style.backgroundColor='rgba(0,254,255)';
  document.querySelector('body').style.color="white";
}