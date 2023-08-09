import {posts} from "./database.js" 
import {buttonsLike, buttonsOpenPost} from "./button.js"

function showPosts() {
    const modal = document.querySelector(".modal");
    const botton = document.querySelectorAll(".open-post");

    for (let i = 0; i < botton.length; i++){
        botton[i].addEventListener("click", function() {
            for (let j = 0; j < posts.length; j++){
                if(Number(botton[i].id) == posts[j].id) {
                    console.log(posts[j])
                }
            }
        })
    }
} 
showPosts()

function renderPost(post) {
    const container = document.querySelector(".modal__container");

    post.name;
    post.profission;
    post.tilte;
    post.content;
}

function addElement() {
    const newDiv = document.createElement("div");

    const newH2 = document.createElemen("h2");

    const newP = document.createElement("p");
}

buttonsLike();
buttonsOpenPost();