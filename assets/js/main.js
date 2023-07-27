const dropdownItems = document.querySelectorAll('.nav-list-hover')
const gradientValue = 

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
    for (let i = 0; i <= 4; i++) {
        const div = document.createElement('div')

        div.style.backgroundImage = `url(images/landing-${i}.jpg)`

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

        

    }, 5000)
}

slideshow()