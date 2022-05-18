let Btn = document.querySelector(".add-task");
let Input = document.querySelector("input.task-title");
let Wrapper = document.querySelector(".tasks .list-group");

var Date = new Date(); 



Btn.addEventListener("click",function () {
    if (Input.value.trim() !== "") {
        let newElement1 = "<li class='list-group-item'>" + "Day:"+Date.getDate() +" "+"Hour:"+Date.getHours() +"</li>"
        Wrapper.innerHTML = newElement1 + Wrapper.innerHTML ;
        let newElement = "<li class='list-group-item active'>" + Input.value +"</li>"
        Wrapper.innerHTML = newElement + Wrapper.innerHTML ;
        Input.value = "";
    }
    else {
        alert("Empty task!");
    }
})

document.addEventListener("keyup",function(event) {
    if (event.keyCode==13) {
        let newElement1 = "<li class='list-group-item'>" + "Day:"+Date.getDate() +" "+"Hour:"+Date.getHours() +"</li>"
        Wrapper.innerHTML = newElement1 + Wrapper.innerHTML ;
        let newElement = "<li class='list-group-item active'>" + Input.value +"</li>"
        Wrapper.innerHTML = newElement + Wrapper.innerHTML ;
        Input.value = "";
    }
})