let  Taskform = document.getElementById("taskform")
var  Submit = document.getElementById("submit")
var reminderList = document.querySelector("#tasks");

Taskform.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    let newtask = document.getElementById("task");
    if (newtask.value==""){
        alert("ensure you input a task");
        }else{
            alert("the task is successfully submitted");

            var li = document.createElement("li"); // create an li
            li.textContent = newtask.value; // set its text content to input's value
            reminderList.appendChild(li); // add it to the ul

            let value=newtask.value;
            
            console.log(
                value
            );
            newtask.value="";
            return false;
        }

});



