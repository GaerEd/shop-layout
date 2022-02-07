let filterCategotyHeader = document.querySelectorAll('.filter__menu__list');
filterCategotyHeader.forEach(function(header){
    header.addEventListener('click', function(event){
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSize = document.querySelector('.filter__size');
let filterParameters = document.querySelector('.filter__parameters__size');
filterParameters.addEventListener('click', function(){
    filterSize.classList.toggle('hidden');
})