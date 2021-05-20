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
        <div class="blogPosts">
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



/* Form Validation*/

function validation(){


const name = document.querySelector("#name").value;
const email = document.querySelector("#email").value;
const subject = document.querySelector("#subject").value;
const message = document.querySelector("#message").value;
const errorMsg = document.querySelector("#error-message");
const pattern = /\S+@\S+\.\S+/;
let text;


if(name.length <5){
    text = "Please enter a valid name"
    errorMsg.innerHTML = text;
    return false;
}




if(subject.length <15){
    text = "Subject must be 15 characters or longer"
    errorMsg.innerHTML = text;
    return false;
}


if(message.length <25){
    text = "Message must be 25 characters or longer"
    errorMsg.innerHTML = text;
    return false;
}



return true;

}


