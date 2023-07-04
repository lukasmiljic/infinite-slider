const arrowPrev = document.querySelector('.arrow.prev')
const arrowNext = document.querySelector('.arrow.next')
const sliderWrapper = document.querySelectorAll('.slider-wraper')
const widthToScroll = sliderWrapper[0].children[0].offsetWidth
const column = Math.floor(sliderWrapper[0].offsetWidth / widthToScroll)


//arrows
arrowPrev.onclick = function (){
    sliderWrapper.forEach(slider =>{
        slider.scrollLeft -= widthToScroll
    })
    console.log("click")
}

arrowNext.onclick = function (){
    sliderWrapper.forEach(slider =>{
        slider.scrollLeft += widthToScroll
    })
    console.log("click")
}


//loop
const slider1 = document.querySelector('.slider1')
const slider2 = document.querySelector('.slider2')
const slider1Children = Array.from(slider1.children)
const slider2Children = Array.from(slider2.children)
const gridPadding = 24

//add duplicate elements to the end and beggining
slider1Children.slice(-column).reverse().forEach(item=> {
    slider1.insertAdjacentHTML('afterbegin',item.outerHTML)
})

slider1Children.slice(0,column).forEach(item=> {
    slider1.insertAdjacentHTML('beforeend',item.outerHTML)
})

slider2Children.slice(-column).reverse().forEach(item=> {
    slider2.insertAdjacentHTML('afterbegin',item.outerHTML)
})

slider2Children.slice(0,column).forEach(item=> {
    slider2.insertAdjacentHTML('beforeend',item.outerHTML)
})

//illusion of infinite scroll
slider1.onscroll = function () {
    console.log(slider1.scrollLeft)
    if (slider1.scrollLeft <= gridPadding) {
        console.log(column)
        slider1.classList.add('no-smooth')
        slider1.scrollLeft = slider1.scrollWidth - 2 * (column * (widthToScroll + gridPadding))
        slider1.classList.remove('no-smooth')
    }else if(slider1.scrollLeft === slider1.scrollWidth - (slider1.offsetWidth + gridPadding)){
        slider1.classList.add('no-smooth')
        slider1.scrollLeft = slider1.offsetWidth
        slider1.classList.remove('no-smooth')
    }
}


slider2.onscroll = function () {
    console.log(slider2.scrollLeft)
    if (slider2.scrollLeft <= gridPadding) {
        console.log(column)
        slider2.classList.add('no-smooth')
        slider2.scrollLeft = slider2.scrollWidth - 2 * (column * widthToScroll)
        slider2.classList.remove('no-smooth')
    }else if(slider2.scrollLeft === slider2.scrollWidth - (slider2.offsetWidth + gridPadding)){
        slider2.classList.add('no-smooth')
        slider2.scrollLeft = slider2.offsetWidth
        slider2.classList.remove('no-smooth')
    }
}
