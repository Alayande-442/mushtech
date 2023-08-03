// ************* Drop down section **************

const dropdownItems = document.querySelectorAll('.nav-list-hover')

dropdownItems.forEach(dropdownItem => {
    dropdownItem.addEventListener("mouseover",() => {
        dropdownItem.lastElementChild.style.cssText = `opacity:.9; visibility:visible`
        document.querySelector('.navbar-wrapper').style.background = `linear-gradient(to right, #066399, #2f8fdf,#066399)`
    })

    dropdownItem.addEventListener("mouseout",() => {
        dropdownItem.lastElementChild.style.cssText = `opacity:0; visibility:hidden`
        document.querySelector('.navbar-wrapper').style.background = `none`
    })
})


// *********** slide background *****************//

function slideShowDivs() {
    for (let i = 1; i <= 5; i++) {
        const div = document.createElement('div')
        

        div.style.backgroundImage = `linear-gradient(to bottom, rgba(4, 21, 122, 0.52), rgba(8, 2, 64, 0.73)),url(images/landing-${i}.jpg)`

        i === 1 && div.classList.add('change')

        document.querySelector('.slideshow').appendChild(div)
    }

}

slideShowDivs()


const divs = document.querySelectorAll('.slideshow div')
let a = 1

const slideshow = () => {
    setInterval(() => {
        a++
        const div = document.querySelector('.slideshow .change')
        div.classList.remove('change')

        if(a < divs.length) {
            div.nextElementSibling.classList.add('change')

        }else {
            divs[0].classList.add('change')
            a = 1
        }

        

    }, 20000)
}

slideshow()