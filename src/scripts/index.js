import {posts} from "./database.js" 

function buttonsLike() {
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

function buttonsOpenPost() {
    const buttons = document.querySelectorAll(".open--post");

    const modalPost = document.querySelector(".modal__controller");
    
        for (let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener("click", function(event) {
               const postId = event.target.id;

               for (let j = 0; j < posts.length; j++) {
                if(posts[j].id == postId){
                    const modalCreated = createCard(posts[j])
                   
                    modalPost.append(modalCreated)
                    modalPost.showModal()
                }
               }
            })
        }    
}

function createCard(element){
    const divArticle = document.createElement("article")
    divArticle.setAttribute("id", "article__modal")
    const divImage = document.createElement("div")
    const itemImage = document.createElement("img");
    const itemUser = document.createElement("h2");
    const divTitle = document.createElement("div")
    const itemOffice = document.createElement("p");
    const itemTitle = document.createElement("h2");
    const itemContent = document.createElement("p");

    itemImage.classList.add("image");
    itemImage.src = element.img;
    itemImage.alt = element.user;

    itemUser.classList.add("user__name");
    itemUser.innerText = element.user;

    itemOffice.classList.add("office");
    itemOffice.innerText = element.stack;

    itemTitle.classList.add("post__title");
    itemTitle.innerText = element.title;

    itemContent.classList.add("content__post");
    itemContent.innerText = element.text;

    divImage.append(itemUser, itemOffice);
    divTitle.append(itemImage, divImage);

    divArticle.append(divTitle, itemTitle, itemContent);

    return divArticle;
    
}

function handleModal() {
    const modalController = document.querySelector(".modal__controller");
    const button = document.querySelector(".open--post");

    button.addEventListener("click", function(){
        modalController.showModal()
    });
}

function closeModal() {
    const modalController = document.querySelector(".modal__controller");
    const closeButton = document.querySelector(".modal__id");
    
    closeButton.addEventListener("click", function(){
        const article__modal = document.getElementById("article__modal")

        article__modal.remove();
        modalController.close();
    })
}


buttonsLike();
buttonsOpenPost();
handleModal();
closeModal();




