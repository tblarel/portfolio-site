var slideIndex = 1;
showDivs(slideIndex,'one');
showDivs(slideIndex, 'two');
showDivs(slideIndex, 'three');

function plusDivs(n, idx) {
    showDivs(slideIndex += n,idx);
}

function showDivs(n,idx) {
    var i;
    var x = document.getElementsByClassName("mySlides "+idx);
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}