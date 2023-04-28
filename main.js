
const allskekton = document.querySelectorAll(".bg-preload")
function load(){
allskekton.forEach((item)=>{
item.classList.remove('bg-preload')
})
}

setTimeout(() => {
    load()
}, 1000);
