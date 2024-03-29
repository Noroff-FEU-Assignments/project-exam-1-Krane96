const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');

const url = `https://www.martinlk.no/wp-json/wp/v2/posts/${id}`;
fetch(url)
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
    displaySpecificPost(data);
})
.catch((error) => {
    console.error('Error', error);
});

const displayPost = document.querySelector("#specific-blog-post");
function displaySpecificPost (data) {
    
    let content = `
     <div class="blog-post-container">
      
     <h1>${data.title.rendered}</h1>
     ${data.content.rendered}
    
     <a href="blog.html">&#10094; Back</a>





    </div>
`
displayPost.innerHTML = content;
document.title =  "Blog: " +  data.title.rendered;
};



// Making an image bigger when clicked

function biggerImg(){
    bigImg = document.querySelector('.wp-block-image')
    bigImg.style.transform = "scale(1.8)";
    
}
function resetImg() {
    bigImg = document.querySelector('.wp-block-image')
    bigImg.style.transform = "scale(1)";
}
document.body.addEventListener('click', resetImg, true);



// Fixing menu problem
const show = document.querySelector('.show-menu-button');
const welcomeSlider = document.querySelector('#specific-blog-post');
const hide = document.querySelector('.hide-menu-button');

show.addEventListener('click', e => {
   welcomeSlider.style.display = "none";
})

hide.addEventListener('click', e => {
    welcomeSlider.style.display = "block";
    
})








