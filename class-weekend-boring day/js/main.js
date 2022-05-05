function select(){
    const day=document.querySelector('#day').value.toLowerCase();
    let classDay='CLASS DAY';
    let weekEnd ='WEEK END';
    let boringDay='BORING DAY';
    if( day ==="tuesday" || day===" thursday"){
        document.querySelector('#placeToSee').innerText=classDay;
    }
    else if( day==='saturday'|| day==='sunday'){
        document.querySelector('#placeToSee').innerText=weekEnd;
    }
    else{
        document.querySelector('#placeToSee').innerText=boringDay;
    }
}
document.querySelector('#check').addEventListener('click',select)