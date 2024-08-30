const bottomHeader = document.querySelector(".bottom-header")
const humburger = document.querySelector(".humburger")
const xIcon = document.querySelector(".x-icon")

humburger.addEventListener("click", ()=>{
    bottomHeader.classList.add("active")
})

xIcon.addEventListener("click", ()=>{
    bottomHeader.classList.remove("active")
})