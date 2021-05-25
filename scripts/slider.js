
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
        
            
            
           <li class="carousel__slide">${post.content.rendered}</li>
            

            
            
        
        
        
        
        `;
    })

};

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//slides[0].style.left = slideWidth * 0 + "px";
//slides[1].style.left = slideWidth * 1 + "px";
//slides[2].style.left = slideWidth * 2 + "px";

