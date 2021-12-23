change_pass = document.querySelector("#button_change")

change_pass.addEventListener("click", (e) => {
    e.preventDefault()
    let some = document.querySelector("#some")
    let username1 = document.querySelector("#username1").value
    let pwd1 = document.querySelector("#password1").value
    let pwd2 = document.querySelector("#password2").value
    let user = localStorage.getItem(username1)
    let data = JSON.parse(user)
    if(user == null){
        some.innerHTML = "no such user"
    }else if(pwd1.length < 8 || pwd2.length < 8){
        some.innerHTML = "no less than 8 chars"
    }
     else if(pwd1 !== pwd2){
        some.innerHTML = "passwords dont match"
    }else{
        let new_user = {
            user_name: username1,
            user_password: pwd1
        }
        localStorage.setItem(data.user_name, JSON.stringify(new_user));
    }
})