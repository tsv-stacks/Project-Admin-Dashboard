var getSidebar = document.querySelector('nav');
var getToggle = Array.from(document.getElementsByClassName('toggle'));


for (var i = 0; i <= getToggle.length; i++) {
    getToggle[i].addEventListener('click', function () {
        if (window.innerWidth < 1075) {
            getSidebar.classList.toggle('active');
        }

    });
}
