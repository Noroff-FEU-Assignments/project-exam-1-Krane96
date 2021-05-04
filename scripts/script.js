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
            <h1>${post.title.rendered}</h1>
            <a href="specificPost.html?id=${post.id}">
            <img>${post.excerpt.rendered}</img>
            </a>
        </div>
        
        
        
        `;
    })

};



/* Form Validation*/
function validation(){
    

const name = document.querySelector("#name").value;
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const errorMsg = document.querySelector("#error-message");
let text;
const regEx = /\S+@\S+\.\S+/;


errorMsg.style.padding = "10px";

if(name.length <5){
    text = "Please Enter a Valid Name";
    errorMsg.innerHTML = text;
    return false;
}
if(subject.length <15){
    text = "Subject must be 15 Characters or More";
    errorMsg.innerHTML = text;
    return false;
}
if(message.length <25){
    text = "Message Must Be 25 Characters or More";
    errorMsg.innerHTML = text;
    return false;
}



alert ("Message Sent!");
return true;



}