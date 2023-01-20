let button = document.getElementById("myButton")
let input = document.getElementById("myInput")
let list = document.getElementById("list")

const toDoList = [

]

let numbers  = [

]

let number = toDoList.length

function render(){
    toDoList.forEach(element =>{
        let object = {

            id: element.id,
            todo: element.todo,
           };
    
           let li = document.createElement("li")
           let gilaki = document.createElement("button")
           li.innerHTML = "ID: " + object.id+ " Todo: " + object.todo
           gilaki.innerHTML = "DELETE"
           list.appendChild(li)
           list.appendChild(gilaki)
           gilaki.onclick = function(){

            let gela = toDoList.find(a=>a.id == object.id)
            
            toDoList.splice(toDoList.indexOf(gela),1)
            remove()
            render()


           }
      
           


    })
}

button.addEventListener("click", ()=>{
    toDoList.push({
        id: number,
        todo: input.value

    })

    number++
    remove()
    render()
    input.value = " "
    console.log(toDoList)
})


function remove(){

    while(list.firstElementChild){
        list.removeChild(list.firstElementChild)
    }

}




