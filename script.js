let inp= document.querySelector("input")
let btn= document.querySelector("button")
let ul=document.querySelector("ul")

let addTask= function(){
    if(inp.value==''){
        alert("Write Something 😒😘")
    }else{
        let task=document.createElement("li")
    task.innerText=inp.value
    ul.appendChild(task)
    let delButton= document.createElement("button")
    delButton.innerText=""
    delButton.classList.add("delete")
    task.appendChild(delButton)
    }
    inp.value=""
    saveData();
}
btn.addEventListener("click",addTask)

ul.addEventListener('click', function(event){
    if(event.target.nodeName=="BUTTON"){
    event.target.parentNode.remove()
    saveData();
    }else{
        let listItem = event.target;
        listItem.classList.toggle("checked");
        saveData()
    }   
})

inp.addEventListener("keydown", (event) => {
    if (event.key=="Enter") {
        addTask();
    }
});

function saveData() {
    localStorage.setItem("data",ul.innerHTML);
}

function loadData() {
    ul.innerHTML = localStorage.getItem("data");
}

loadData();