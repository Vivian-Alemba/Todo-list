const clear=document.querySelector(".clear")
const dateElement=document.querySelector("#date")
const list=document.getElementById("list")
const input=document.getElementById("input")



const CHECK= "fa-check-circle"
const UNCHECK="far-circle"
function addToDo(toDo){
const text=`<li class="item">
            <i class="co far fa-circle" job="complete"></i>
            <p class="text font-weight-bold"> ${toDo} </p>
            <i class="de fa fa-trash delete text-success" job="delete"></i>
            </li>`
const position="beforeend"

  list.insertAdjacentHTML(position,text)          

}
addToDo("Attend Stand-ups")

//javascript add a to-do

document.addEventListener("keyup",function(event){
    if(event.keyCode==13){
        const toDo=input.value
        if(toDo){
            addToDo(toDo)
        }
        input.value=""
    }
})

//javascript store a to do

let LIST=[]
let id=0

document.addEventListener("keyup",function(event){
    if(event.keyCode==13){
        const toDo=input.value
        if(toDo){
            addToDo(toDo,id,false,false)
            LIST.push({
                name:toDo,
                id:id,
                done:false,
                trash:false
            })
        }
        input.value=""
        id++
    }

})