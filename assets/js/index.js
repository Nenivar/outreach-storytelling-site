function coverOnClick(ele) {
    ele.classList.toggle('opening');

    x = document.getElementsByClassName('middlepaper');

    for (let e of x) {
        paperOnClick(e);
    }
}

function paperOnClick(ele) {
    ele.classList.toggle('opening');

    ele.style.zIndex =
        (ele.classList.contains('opening')) ? 10 : 0;
}

/* var cover = document.querySelector('.cover');
cover.addEventListener('click', function() {
    cover.classList.toggle('opening');
}); */

