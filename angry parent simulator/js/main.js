function showText(){
    //get name
    let fName=document.querySelector('#firstName').value;
    let fMid=document.querySelector('#firstMiddle').value;
    let lMid=document.querySelector('#lastMiddle').value;
    let lName=document.querySelector('#lastName').value;
    //show name
    let showName=`${fName} ${fMid} ${lMid} ${lName}`
    document.querySelector('#placeToYell').innerText=showName;
    //speak name
    let speakText= new SpeechSynthesisUtterance(showName);
    window.speechSynthesis.speak(speakText);
}
 document.querySelector('#yell').addEventListener('click',showText)
