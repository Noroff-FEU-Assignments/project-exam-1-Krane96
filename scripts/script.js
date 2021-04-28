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
}

getBlogPosts();

function createHTML(blogPosts){
    blogPosts.forEach(function(post){
        posts.innerHTML += `
        <div class="blogPosts">
            <h1>${post.title.rendered}</h1>
            <img>${post.excerpt.rendered}</img>
        </div>
        
        
        
        `;
    })

}