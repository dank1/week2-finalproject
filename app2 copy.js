let clicked = false

function openMenu() {
    if(!clicked)
    {
        document.body.classList.add("menu--open");
        clicked = true;
    }
}

function closeMenu(){
    if(clicked)
    {
        document.body.classList.remove("menu--open");
        clicked = false;
    }
}