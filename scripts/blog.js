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
     <img>${data.content.rendered}</img>
     





    </div>
`
displayPost.innerHTML = content;
};

