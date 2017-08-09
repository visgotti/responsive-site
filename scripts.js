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

class SlideJoe{
    constructor(){
        this.slideIndex = 0;
        this.slides = [];
        this.scrollButtons = [];
        this.getSlides()
        this.createScroller()

    }

    // this function finds all the elements in our html code with the class slide
    // and pushes it to an array for us to index within the class. it also sets
    getSlides(){
        let slides = document.getElementsByClassName('slide')
        // start with 1 since we already did the first slide.
        for(var i = 0; i < slides.length; i++){
            let currentSlide = slides[i];
            this.slides.push(currentSlide)
        }

        // set the first slide to active
        this.slides[0].setAttribute('id', 'active-slide')

    }


    // this function will create a scroll button for each slide weve added
    // it will also set the onclick handler to a function that handles
    // the logic to change the slide.
    createScroller(){
        let slidejoe = document.getElementById("slidejoe")

        let scrollers = document.createElement('div')
        scrollers.setAttribute('class', 'scrollers')

        for(var i = 0; i < this.slides.length; i++){
            let scrollButton = document.createElement('div')
            scrollButton.setAttribute('class', 'scroll-button')
            scrollButton.setAttribute('value', i)

            let self = this;
            scrollButton.onclick = function(clicked){

                self.changeSlide(clicked.target.getAttribute('value'))
            }

            scrollers.appendChild(scrollButton)
            this.scrollButtons.push(scrollButton)
        }

        slidejoe.appendChild(scrollers)

        // set the first button to active
        this.scrollButtons[0].setAttribute('id', 'active-scroll-button')

    }

    // this just simply sets the active-slide attribute to the slide
    // based on the index.
    changeSlide(newIndex) {
        this.slideIndex = newIndex;
        document.getElementById('active-slide').removeAttribute('id');
        this.slides[this.slideIndex].setAttribute('id', 'active-slide')

        document.getElementById('active-scroll-button').removeAttribute('id');
        this.scrollButtons[this.slideIndex].setAttribute('id', 'active-scroll-button')

    }

}