const footer = document.querySelectorAll(`*[data-type="observer"]`)
const navBar = document.querySelector("nav")
const form = document.querySelector("form")

const options = { threshold: 0 }

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return

        if(entry.target.tagName.toLowerCase() === "footer") {
            navBar.classList.toggle("dark-nav") 
        }    
        else if(entry.target.tagName.toLowerCase() === "header") navBar.classList.remove("dark-nav")   
    })
}, options)

footer.forEach(foot => observer.observe(foot))

form.onsubmit = e => {
    e.preventDefault()

    const inputs = Array.from(form.querySelectorAll("input"))

    const emptyInput = inputs.find(input => input.value === "")

    emptyInput != -1 ? alert("Registration Success!") : alert("Incomplete Data!")

    inputs.forEach(input => console.log(input.value))
}