const url = "https://www.martinlk.no/wp-json/wp/v2/posts";
const blogPosts = document.querySelector(".blogPosts");

async function getBlogPosts(){
    try{
        const response = await fetch(url);
        const getBlogPosts = await response.json();
        postToHTML(getBlogPosts);
    }

    catch(error){
        console.log(error);
    }
}

getBlogPosts();

function postToHTML(blogPosts){
    blogPosts.forEeach(function(blogPosts){
        listOfBlogPosts.innerHTML += `
        <div class="blogPosts">
            
        </div>
        
        
        
        `;
    })

}