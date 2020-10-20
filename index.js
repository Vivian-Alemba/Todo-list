
//select the elements

const clear=document.querySelector(".clear")
const dateElement=document.querySelector("#date")
const list=document.getElementById("list")
const input=document.getElementById("input")

// classes names
const CHECK= "fa-check-circle"
const UNCHECK="fa-circle"
const LINE_THROUGH="lineThrough"



//variables
let LIST
let id



//get element from localstorage
let data=localStorage.getItem("TODO")

//check if data is not empty
if(data){
   LIST=JSON.parse(data)
    id=LIST.length //set the id to the last one in the list
    loadList(LIST) //load the list to the user interface

}else{
    //if the data isn't empty
    LIST=[]
     id=0
}
//load items to the user interface
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name,item.id,item.done,item.trash)

    })

}
//clear the localstorage
clear.addEventListener("click",function(){
    localStorage.clear()
    location.reload()
})





//show todays date

const today=new Date()
const options={weekday:"long",month:"short",day:"numeric"}
dateElement.innerHTML=today.toLocaleDateString("en-US",options)



//add todo function
function addToDo(toDo,id,done,trash){
    if(trash){
        return
    }
    const DONE=done ? CHECK :UNCHECK;
    const LINE=done ? LINE_THROUGH :"";

    
    const position="beforeend"
    const item=`
    <li class="item">
    <i class="far text-bold ${DONE}  co mt-2 ml-2 " job="complete" id="${id}"></i>
    <p class="text ${LINE}">${toDo}</p>
    <i class="fa fa-trash text-success de float-right mt-2 mr-2" job="delete" id="${id}"></i> </li>
    `
    list.insertAdjacentHTML(position,item)
}
// addToDo("Attend Stands-Up")




//add an item to the list when the user press the enter key
document.addEventListener("keyup",function(event){
    if(event.keyCode ==13){
        const toDo=input.value
        //if the input isnt empty
        if(toDo){
            addToDo(toDo,id,false,false)

            LIST.push({
            name:toDo,
            id:id,
            done:false,
            trash:false
        })
        //add item to the localstorage(this code must be written where the list array is updated)
       localStorage.setItem("TODO",JSON.stringify(LIST))
       id++

        }
        input.value=""
    }
});

// addToDo("Coffee",1,false,true)

//complete to do
function completeToDo(element){
    element.classList.toggle(CHECK)
    element.classList.toggle(UNCHECK)
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH)

    //updating our list
    LIST[element.id].done=LIST[element.id].done ? false : true;

}
//remove a todo
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode)

    //updating our list
    LIST[element.id].trash=true

}

//targeting our items created dynamically
list.addEventListener("click",function(event){
   let element=event.target //return the clicked item inside our list
const elementJob =element.attributes.job.value //return complete or delete

    if(elementJob =="complete"){
        completeToDo(element)


    }else if(elementJob =="delete"){
        removeToDo(element)

    }
//add item to the localstorage(this code must be written where the list array is updated)
localStorage.setItem("TODO",JSON.stringify(LIST))

})




















// //javascript:targeting an element created dynamically
// list.addEventListener('click',function(event){
//     let element= event.target
//     const elementJob=event.target.attributes.job.value
//     if(elementJob=="complete"){
//         completeToDo(element)
 
//     }else if(elementJob=="delete"){
//         removeToDo(element)
 
//     }
//     //UPDATE TO LOCALSTORAGE
//     localStorage.setItem("TODO",JSON.stringify(LIST))
 
     
//  })

//  //javascript:save todo-list to localstoroge
//  localStorage.setItem('key','value')
//  let variable=localStorage.getItem('key')
//  localStorage.setItem("TODO",JSON.stringify(LIST))

//  //javascript:restore to-do list from localstoroge
//  let LIST,id
//  let data=localStorage.getItem("TODO")// restore our list array
//  if(data){
//      LIST=JSON.parse(data)
//      loadToDo(LIST)// we load our list to the page
//      id=LIST.length //if the last id was 10, then the LIST.length will return 11, means that 11 will be the next to-do id


//  }else{
//      LIST=[]
//      id=0
//  }

//  function loadToDo(array){
//      array.forEach(function(item) {
//          addToDo(item.name,item.id,item.done,item.trash)
         
//      }, this);

//  }

//  //javascript :clear localstorage
//  const clear=document.querySelector(".clear")
//  clear.addEventListener('click',function(){
//      localStorage.clear()
//      location.reload()  // reload the page
//  })

//  //javascript :show date
//  const dateElement=document.querySelector("#date")
//  let options={weekday:"long",month:"short",day:"numeric"}
//  let today=new Date()
//  dateElement.innerHTML=today.toLocaleDateString("en-US",options)




// //javascript add a to-do

// document.addEventListener("keyup",function(event){
//     if(event.keyCode==13){
//         const toDo=input.value
//         if(toDo){
//             addToDo(toDo)
//         }
//         input.value=""
//     }
// })

// //javascript store a to do

// let LIST=[]
// let id=0

// document.addEventListener("keyup",function(event){
//     if(event.keyCode==13){
//         const toDo=input.value
//         if(toDo){
//             addToDo(toDo,id,false,false)
//             LIST.push({
//                 name:toDo,
//                 id:id,
//                 done:false,
//                 trash:false
//             })
//         }
//         input.value=""
//         id++
//     }

// })