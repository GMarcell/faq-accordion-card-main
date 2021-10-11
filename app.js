function dropdownFunction(a) {
    a.parentNode.getElementsByClassName('dropdown-content')[0].classList.toggle("show");
    a.parentNode.getElementsByClassName('dropbtn')[0].classList.toggle("active");
    a.parentNode.getElementsByClassName('arrow')[0].classList.toggle("flip");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdown = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdown.length; i++) {
            var openDropdown = dropdown[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}