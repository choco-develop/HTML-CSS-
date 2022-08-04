document.querySelector('button').addEventListener('click',readMore)
function readMore(){
    if(document.querySelector('#more').style.display==='none'){
        // === used for comparison while =is used for assignment
        document.querySelector('#more').style.display='inline'
        document.querySelector('#less').style.display='none'
        document.querySelector('button').innerText='Read Less'
    }
    else {
        document.querySelector('#more').style.display='none'
        document.querySelector('#less').style.display='inline'
        document.querySelector('button').innerText='Read More '

    }
       

    
}