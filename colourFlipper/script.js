const button=document.getElementById("button")
const wrap=document.getElementById("wrap")
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const colortext=document.getElementById('color')

button.addEventListener('click',changebg)

function changebg(){
    let color='#'
    for(let i=1; i<=6; i++){
        color=color+randnum()
    }
    wrap.style.backgroundColor= color
    colortext.innerHTML=color
}

function randnum(){
    let num=Math.floor(Math.random()*16)
    return hex[num]
}

console.log(color)