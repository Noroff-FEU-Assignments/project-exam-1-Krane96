
const url = "https://www.martinlk.no/wp-json/wp/v2/posts";
const latestPosts = document.querySelector(".carousel__track");

async function makeSlider(){
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
        console.log(getResults);
    }

    catch(error){
        console.log(error);
    }
};

makeSlider();

function createHTML(carouselSlider){
    carouselSlider.forEach(function(post){
        latestPosts.innerHTML += `
        
            
            
           <li class="carousel__slide current-slide">${post.content.rendered}</li>
            

            
            
        
        
        
        
        `;
    })

};
// slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlides(n) {
    showSlides(slideIndex = n);
}
function showSlides(n){
    var i;
    var slides = document.querySelectorAll('.slide')
    var dots = document.querySelectorAll('.dot');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    
}


// fixing so the slider dont show on top of the mobile menu //
const show = document.querySelector('.show-menu-button');
const welcomeSlider = document.querySelector('.welcome-slider');
const hide = document.querySelector('.hide-menu-button');

show.addEventListener('click', e => {
   welcomeSlider.style.display = "none";
})

hide.addEventListener('click', e => {
    welcomeSlider.style.display = "block";
})



