const form = document.querySelector("form")

form.onsubmit = e => {
    e.preventDefault()

    const inputs = Array.from(form.querySelectorAll("input"))

    const emptyInput = inputs.find(input => input.value === "")

    emptyInput != -1 ? alert("Sign in Success!") : alert("Incomplete Data!")

    inputs.forEach(input => console.log(input.value))
}