(() => {

    const isHome = document.querySelector('title').text.includes("Home")
    const header = document.querySelector(".header");

    if (isHome) {
        header.style.backgroundColor = 'rgba(0,0,0,0.1)';
        header.style.position = "fixed"

        // trigger this function every time the user scrolls
        window.onscroll = function (event) {
            var scroll = window.pageYOffset;
            if (scroll < 300) {
                // setting transparent header
                header.style.backgroundColor = 'rgba(0,0,0,0.1)';
            } else if (scroll >= 300 && scroll < 600) {

                // setting black header
                header.style.backgroundColor = 'var(--black)';
            }
        }
    }
    header.style.backgroundColor = 'var(--black)';

})()