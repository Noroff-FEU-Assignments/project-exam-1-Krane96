/* Getting posts from api */
const url = "https://www.martinlk.no/wp-json/wp/v2/posts";
const posts = document.querySelector(".blogPosts");

async function getBlogPosts(){
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

getBlogPosts();

function createHTML(blogPosts){
    blogPosts.forEach(function(post){
        posts.innerHTML += `
        <div class="blogPost">
        
            <a href="specificPost.html?id=${post.id}">
            <h1>${post.title.rendered}</h1>
            </a>
            <span class="author"> By Martin Lian Krane</span>
            <a href="specificPost.html?id=${post.id}">
            <img>${post.content.rendered}</img>
            </a>
            
        </div>
        
        
        
        `;
    })

};


const loader = document.querySelector('.loader')

setTimeout(function(){
    loader.style.display = "none"
}, 2000);





