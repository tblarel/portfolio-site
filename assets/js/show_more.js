var more = document.querySelectorAll(".show-more");
var trigger = document.querySelectorAll(".trigger-more");

function toggleMore(id) {
    var more = document.querySelector(".show-more" + "." + id)
    if (document.querySelector(".show-more" + "." + id).classList[2] !== undefined) {
        let text = document.querySelector(".trigger-more" +"." +id);
        text.innerHTML = "More Info";
    } else {
        let text = document.querySelector(".trigger-more" + "." + id);
        text.innerHTML = "Less Info";
    }
    more.classList.toggle("display-text");
}

function handleTrigger() {
    let id = event.currentTarget.classList[1];
    toggleMore(id);
}

trigger.forEach((el) => {
    el.addEventListener("click", handleTrigger);
});
