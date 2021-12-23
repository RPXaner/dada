button = document.querySelector("#button")
    let comm_sect = document.querySelector('.comments_section')
    let result = document.querySelector("#result")
    let active = localStorage.getItem('active_user')
    let a_user = localStorage.getItem(active)
    let a_data = JSON.parse(a_user)
if(a_user == null){
    result.innerHTML = "Log in before comment"
    button.disabled = true
    button.classList.add("disbled")
}else{
    result.innerHTML = a_data.user_name
}
let comments = [
    
]
function commentStorage(){
    if(localStorage.getItem("comments") === null){
        localStorage.setItem("comments",  JSON.stringify(comments))
        location.reload(); 
    }
    else{
        return
    }
}
let red_com = localStorage.getItem("comments")
let c_data = JSON.parse(red_com)
console.log(c_data)
//localStorage.setItem("comments",  JSON.stringify(comments))
button.addEventListener("click", () => {
    let comment_content = document.querySelector("#comment_box").value
    let user_comm = a_data.user_name
        let new_comment = {
            user_name: user_comm,
            user_comment: comment_content,
            type: "nos"
        }
        c_data.push(new_comment)

    localStorage.setItem("comments",  JSON.stringify(c_data))
})
function getComments(){
    //localStorage.setItem("comments",  JSON.stringify(comments))
    if(red_com){
        for (const com in c_data.reverse()) {
            if(c_data[com].type == "nos"){
            let div = document.createElement("div")
        let p = document.createElement("p")
        let h1 = document.createElement("h1")


        let username = document.createTextNode(c_data[com].user_name)
        let node = document.createTextNode(c_data[com].user_comment)

        h1.appendChild(username)
        h1.classList.add("comment_block_username")
        div.appendChild(h1)

        p.appendChild(node)
        p.classList.add("comment_block_text")

        div.appendChild(p)
        div.classList.add("comment_block")

        comm_sect.appendChild(div)

        console.log(comm_sect.appendChild(div))
            }
        
      }
    }else{
        return
    }
    
}
getComments()
//addComm()
commentStorage()
console.log()