var closeBtn = document.getElementById('close');
var nextBtn = document.getElementById('next');
var perviousBtn = document.getElementById('pervious');

var imageSlides = document.querySelectorAll('.slide img')

var sliderModal = document.querySelector('.slider-modal')
var modalImage = document.querySelector('.slider-content img')

var slectedIndex = -1;

closeBtn.addEventListener('click',function(){
    sliderModal.classList.replace('d-flex','d-none')
})

nextBtn.addEventListener('click', function(){
    
    slectedIndex = slectedIndex + 1;
    if (slectedIndex > (imageSlides.length - 1) ) {
        slectedIndex = 0
    }
    var image = imageSlides[slectedIndex]
    modalImage.src = image.src
})

perviousBtn.addEventListener('click', function(){
    slectedIndex = slectedIndex -1;

    if (slectedIndex < 0) {
        slectedIndex = imageSlides.length - 1
    }

    var image = imageSlides[slectedIndex];
    modalImage.src = image.src
})

for (let index = 0; index < imageSlides.length; index++) {
    var slide = imageSlides[index];

    slide.addEventListener('click',function(e){
        sliderModal.classList.replace('d-none','d-flex')
        modalImage.src = e.target.src
        slectedIndex = index
        
    })
}

