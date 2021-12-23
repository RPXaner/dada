button = document.querySelector("#button")
button.addEventListener("click", (e) => {
    
    let username = document.querySelector("#username").value
    let pwd = document.querySelector("#password").value
    let result = document.querySelector("#result")
    let user = localStorage.getItem(username)
    let data = JSON.parse(user)

    if(user == null){
        result.innerHTML = "no such user"

    } else if(username == data.user_name && pwd == data.user_password){
        result.innerHTML = "logged in as " + username
        localStorage.setItem("active_user", username)
    }else{
        result.innerHTML = "wrong"
    }
})
