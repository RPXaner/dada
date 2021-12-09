button = document.querySelector("#button")
button.addEventListener("click", (e) => {
    e.preventDefault();
    
    let username = document.querySelector("#username").value
    let pwd = document.querySelector("#password").value
    let pwd2 = document.querySelector("#password2").value
    if(localStorage.getItem(username) == null){
        if(username.length < 2 || username.length == null){
            document.querySelector("#result").innerHTML = 'username should be more than 2 chars long'
        }else if(pwd.length < 8 || pwd.length==null){
            document.querySelector("#result").innerHTML = 'password should be more than 8 chars long'
        }else if(pwd2 !== pwd){
            document.querySelector("#result").innerHTML = 'passwords dont match'
        }
        else{
            let new_user = {
            user_name: username,
            user_password: pwd
        }
        localStorage.setItem(new_user.user_name, JSON.stringify(new_user))
        localStorage.setItem("active_user", new_user.user_name)
        document.querySelector("#active_user").textContent = localStorage['active_user']
        console.log("new user is assigned!")
        }
        
    }else{
        console.log("there is already that user")
    }
})

reuse = document.querySelector("#reuse")
console.log(reuse)
reuse.addEventListener("click", (e) => {
    localStorage.removeItem('active_user')
    document.querySelector("#active_name").textContent = ' '
})