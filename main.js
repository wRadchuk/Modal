var onLoad = function () {

    let body   = document.getElementById('body');
    let fog    = document.getElementById('fog');
    let modal  = document.getElementById('modal');
    let button = document.getElementById('button');
    button.addEventListener('click', function() {
        //body.classList.add('modal__show');
        fog.classList.add('show');
        //button.classList.add('modal__show');
        modal.classList.add('show');
    });

    let modal_button = document.getElementById('modal__button');
    modal_button.addEventListener('click', function() {
        //body.classList.remove('modal__show');
        fog.classList.remove('show');
        //button.classList.remove('modal__show');
        modal.classList.remove('show');
    });

};


document.addEventListener("DOMContentLoaded", onLoad);
