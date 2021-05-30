const url = "https://www.martinlk.no/wp-json/wp/v2/posts";
const latestPosts = document.querySelector(".carousel-slider");

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
        
            
            
           <div class="carousel-slide">${post.content.rendered}
           <a href="/html/specificPost.html?id=${post.id}">
           <div class="text">${post.title.rendered}</div>
           </a>
           
           </div>  
        
        `;
    })

};


// fixing so elements with position or opacity show over the mobile menu //
const show = document.querySelector('.show-menu-button');
const hide = document.querySelector('.hide-menu-button');
const welcomeSlider = document.querySelector('.welcome-section');
const hideSlider = document.querySelector('.carousel-slider');



show.addEventListener('click', e => {
   welcomeSlider.style.display = "none";
   hideSlider.style.display = "none";
  
})

hide.addEventListener('click', e => {
    welcomeSlider.style.display = "block";
    hideSlider.style.display = "block";
    
})





// Slider //

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.carousel-slide');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}

