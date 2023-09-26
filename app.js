
// Variables


let modalCall = document.getElementById('btn-call');
let modalContainer = document.getElementById('modal-container');
let closeModal = document.getElementById('close-btn');

// EventListener 

modalCall.addEventListener('click', function(){
    modalContainer.style.display = 'block';
})

closeModal.addEventListener('click', function(){
    modalContainer.style.display = 'none'
})

window.addEventListener('click', function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = 'none'
    }
})