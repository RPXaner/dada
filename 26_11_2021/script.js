let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));



console.log(buttons)

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case '=':
                try{
                    display.innerText = eval(display.innerText)
                    setTimeout(() => {
                        display.innerText = ''
                    }, 2000);
                }catch{
                    display.innerText = "Error!@"
                }
                break
            default:
                display.innerText += e.target.innerText
        }
    })
})