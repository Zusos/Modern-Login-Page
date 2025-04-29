const switchTheme = document.getElementById("switch")

switchTheme.addEventListener("change", function (){
    if(this.checked){
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
})

