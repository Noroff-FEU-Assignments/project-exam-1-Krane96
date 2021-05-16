const url = "https://www.martinlk.no/wp-json/wp/v2/posts";
const latestPosts = document.querySelector(".carousel-slide");

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
        <div class="carousel-slide">
            
            
            <img>${post.content.rendered}</img>
            
            
        </div>
        
        
        
        `;
    })

};

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelector('.carousel-slide');

const prevButton = document.querySelector('#previousBtn')
const nextButton = document.querySelector('#nextBtn')

let counter = 1;
const size = carouselImages[0];

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button

nextButton.addEventListener('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});