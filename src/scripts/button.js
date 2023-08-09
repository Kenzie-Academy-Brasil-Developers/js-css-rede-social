import { posts } from "./database.js";

export function buttonsLike() {
    const buttons = document.querySelectorAll(".like");

        for (let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener("click", function() {
                console.log(buttons[i].src);

                if (buttons[i].src == 'http://127.0.0.1:5500/src/assets/img/gray-heart.svg'){
                 buttons[i].src = 'http://127.0.0.1:5500/src/assets/img/red-heart.svg'
                }else {
                    buttons[i].src = 'http://127.0.0.1:5500/src/assets/img/gray-heart.svg'
                }
            })
        }    
}

export function buttonsOpenPost() {
    const buttons = document.querySelectorAll(".open--post");

        for (let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener("click", function(event) {
               const postId = event.target.id;

               for (let j = 0; j < posts.length; j++) {
                if(posts[j].id == postId){
                   openPost(posts[j])
                }
               }
            })
        }    
}

function renderModal(obj) {
    const modal = document.querySelector(".modal__control");
    // modal.showModal()
    // console.log(modal)

    const img = document.createElement("img");
    const userName = document.createElement("h3");
    const work = document.createElement("p");
    const title = document.createElement("h2");
    const content = document.createElement("p");

    // img.src = obj.img
    // userName.innerText = obj.user
    // work.innerText = obj.stack
    // title.innerText = obj.title
    // content.innerText = obj.text
}

function handleModal() {


    const modalController = document.querySelectorAll(".modal__controller");
    const openPost = document.querySelector(".ope-post");

}



const closePost = document.querySelector(".modal__close"); 

// openPost.addEventListener("click", () => {
//     modalContainer.showModal() 
//     closePost.addEventListener("click", () => {
//         modalContainer.close() 
//     })
// })


function closeModal() {
    const closePost = document.querySelector(".modal__close");
    const modalContainer = document.querySelector("#modalContainer");

//     closePost.addEventListener("click", () => {
//         modalContainer.closeModal()
//         console.log("banana")
        
//     });
}

buttonsLike();
buttonsOpenPost();
renderModal(posts);
handleModal();
closeModal();