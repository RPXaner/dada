

button = document.querySelector(".logout")
let login = document.querySelector(".login")
let registr = document.querySelector(".register")
let active_user = localStorage.getItem('active_user')
let user = localStorage.getItem(active_user)
let data = JSON.parse(user)
    if(user != null){
        login.classList.add("trans")
        registr.classList.add("trans")
    }
    else{
        button.classList.add("trans")
    }

//login.classList.add("trans")
button.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("active_user");
})