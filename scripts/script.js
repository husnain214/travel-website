const images = document.querySelectorAll('.image-gallery article')
const entries = document.querySelectorAll(`*[data-type="observer"]`)
const navBar = document.querySelector("nav")
const form = document.querySelector("form")
const indexes = [4, 5, 2, 0, 3, 1]

const options = { threshold: 1 }

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return
       
        if(entry.target.id === "navObs") {
            navBar.classList.toggle("dark-nav") 
            showAll()
        }    
        else if(entry.target.tagName.toLowerCase() === "header") navBar.classList.remove("dark-nav")   
    })
}, options)

entries.forEach(entry => observer.observe(entry))

function showImage(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            images[indexes[i]].style.opacity = "1"

            const error = 0
        
            if(!error) resolve("1")
            else reject(error)
        }, 400)
    })
}

async function showAll() {
    for( let i = 0; i < images.length; i++ ) 
        await showImage(indexes[i])
}


