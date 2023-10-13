let form = document.getElementById("form")
let inError = 0
const mediaQuery = window.matchMedia('(max-width: 375px)')
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let input = document.getElementById("input")
    let email = input.value
    if(!String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        input.style.borderColor = "var(--light-red)"
        const errorMsg = document.createElement('div')
        errorMsg.id = "error"
        errorMsg.textContent = "Please provide a valid email address"
        const interact = document.getElementById("input")
        if (inError !== 1){
            interact.insertAdjacentElement("afterend",errorMsg)
        }
        inError = 1
        if(mediaQuery.matches){
            console.log("aprove")
            form.style.height = "8rem"
        }
    }else {
        window.location.reload()
    }
    
})



