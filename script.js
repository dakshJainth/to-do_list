const task = document.getElementById("task");
const listcntr= document.getElementById("list-cntr");

function addtask(){
    if(task.value === ''){
        alert("write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = task.value;
        listcntr.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = " [done]";
        li.appendChild(span);
    }

    task.value="";
    saveData();
}

listcntr.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("done");
        saveData()
}

    else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData()
}

}, false);

function saveData(){
    localStorage.setItem("data", listcntr.innerHTML);
}

function showTask(){
    listcntr.innerHTML = localStorage.getItem("data");
}
showTask();
