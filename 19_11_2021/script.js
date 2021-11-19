
document.querySelector(".action").addEventListener('click',(e) => {
    let pro = prompt("name?")
    let da = prompt("surname")
    let age = prompt("age")
    let date = prompt("date")
    let major = prompt("major")
    let about = document.querySelector(".about_input").value

    document.querySelector(".name").innerHTML = pro
    document.querySelector(".surname").innerHTML = da
    document.querySelector(".age").innerHTML = age
    document.querySelector(".date").innerHTML = date
    document.querySelector(".major").innerHTML = major
    document.querySelector(".about").innerHTML = about

})