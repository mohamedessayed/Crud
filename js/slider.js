var closeBtn = document.getElementById('close');
var nextBtn = document.getElementById('next');
var perviousBtn = document.getElementById('pervious');

var imageSlides = document.querySelectorAll('.slide img')

var sliderModal = document.querySelector('.slider-modal')
var modalImage = document.querySelector('.slider-content img')

var selectedIndex = -1;


closeBtn.addEventListener('click',function(){
    sliderModal.classList.replace('d-flex','d-none')
})

nextBtn.addEventListener('click', function(){
    
    selectedIndex = selectedIndex + 1;
    if (selectedIndex > (imageSlides.length - 1) ) {
        selectedIndex = 0
    }
    var image = imageSlides[selectedIndex]
    modalImage.src = image.src
})

perviousBtn.addEventListener('click', function(){
    selectedIndex = selectedIndex -1;

    if (selectedIndex < 0) {
        selectedIndex = imageSlides.length - 1
    }

    var image = imageSlides[selectedIndex];
    modalImage.src = image.src
})

for (let index = 0; index < imageSlides.length; index++) {
    var slide = imageSlides[index];

    slide.addEventListener('click',function(e){
        sliderModal.classList.replace('d-none','d-flex')
        modalImage.src = e.target.src
        selectedIndex = index
        
    })
}

