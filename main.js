const toTop = document.querySelector(".to-top")
Window.addEventListener("scroll",{} =>{
    if (Window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
