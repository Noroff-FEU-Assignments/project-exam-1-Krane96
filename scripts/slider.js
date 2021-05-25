
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

