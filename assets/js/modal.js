var modal = document.querySelectorAll(".modal");
var trigger = document.querySelectorAll(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal(id) {
    var modal = document.querySelector(".modal" + "."+id)
    modal.classList.toggle("show-modal");
}

function handleTrigger() {
    let id = event.currentTarget.classList[2];
    toggleModal(id);    
}

function windowOnClick(event) {
    if (event.target.parentElement.parentElement.classList[0] === modal[1].classList[0]) {
        toggleModal(event.target.parentElement.parentElement.classList[1]);
    } else if (event.target.classList[0] == modal[1].classList[0]) {
        toggleModal(event.target.classList[1]);
    }
}

trigger.forEach( (el) => {
    el.addEventListener("click", handleTrigger);
});
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);