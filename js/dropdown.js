(function handleDropdownMenu(){
    let menu = document.getElementById('menu')

    // we will check every click to see if we're hiding or showing the menu icon.
    window.onclick = function(event){
        // if we click anywhere but the menu icon and the menu is visible, we hide it.
        if(event.target.id !== 'menu-icon'){
            if(hasClass(menu, "active")){
                menu.classList.remove('active')
            }
            // if we do click on the menu icon and it's active, still remove it. otherwise
            // add the active class.
        } else{
            if(hasClass(menu, "active")){
                menu.classList.remove('active')
            } else {
                menu.classList.add('active')
            }
        }
    }

}())


// helper function which checks if an element contains a class or not.
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
