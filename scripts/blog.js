/* Getting posts from api */
const url = 'https://www.martinlk.no/wp-json/wp/v2/posts';
const posts = document.querySelector('.blogPosts');
const loader = document.querySelector('.loader');


async function getBlogPosts(){
    
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
        console.log(getResults);
        loader.style.display = "none";
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






// Load more posts //


const viewMoreButton = document.querySelector('.view-more-button');
let page = 1;

const loadMorePosts = () => {
  page++;
let seeMorePosts = `https://martinlk.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&page=${page}`;
  fetch(seeMorePosts)
    .then((response) => response.json())
    .then((data) => createHTML(data)) 
};


// Load more button disappear when clicked //
viewMoreButton.addEventListener('click', loadMorePosts);

viewMoreButton.addEventListener('click', e => {
    viewMoreButton.style.display = "none";
   
 });