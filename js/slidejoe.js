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