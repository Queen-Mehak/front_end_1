

(function(){
    const todos=[];
    const todocontainer=document.getElementById("todo");
    const inputtask=document.createElement("input");
    inputtask.placeholder="Enter task...";
    inputtask.type="text";
    const addbtn=document.createElement("button");
    addbtn.textContent="Add";
    const todolist=document.createElement("div");
    todolist.style.border="2px solid black";
    todocontainer.append(inputtask,addbtn,todolist);

    function rendertask(task){
        const todoitem=document.createElement("div");
        todoitem.style.border="2px solid black";
        todoitem.style.margin="10px";
        todoitem.style.padding="10px";
        todoitem.style.borderRadius="6px";
        todoitem.style.display="flex";
        todoitem.style.justifyContent="space-between";
        todoitem.style.alignItems="center";

        const p=document.createElement("p");
        p.textContent=task;
        p.style.flex="1";
        p.style.margin="0";

        const deletebtn=document.createElement("button");
        deletebtn.textContent="Delete";

        const editbtn=document.createElement("button");
        editbtn.textContent="Edit";

        const completebtn=document.createElement("button");
        completebtn.textContent="Done ✅";

        // Edit feature
        editbtn.addEventListener("click",function(){
            if(todoitem.querySelector("input")) return; // prevent multiple edit boxes

            const editinput=document.createElement("input");
            editinput.value=task;
            editinput.style.marginRight="5px";

            const savebtn=document.createElement("button");
            savebtn.textContent="Save";

            todoitem.replaceChild(editinput,p);
            todoitem.insertBefore(savebtn,deletebtn);
            editinput.focus();

            function saveTask(){
                const updatedtask=editinput.value.trim();
                if(!updatedtask) return;
                p.textContent=updatedtask;
                const index=todos.indexOf(task);
                todos[index]=updatedtask;
                console.log(todos);
                todoitem.replaceChild(p,editinput);
                savebtn.remove(); // auto remove save button
            }

            savebtn.addEventListener("click",saveTask);
            editinput.addEventListener("keydown",function(e){
                if(e.key==="Enter") saveTask();
            });
        });

        // Delete feature
        deletebtn.addEventListener("click",function(){
            todoitem.remove();
            const index=todos.indexOf(task);
            todos.splice(index,1);
            console.log(todos);
        });

        // Completion feature
        completebtn.addEventListener("click",function(){
            todoitem.style.backgroundColor="lightgreen";
            p.style.textDecoration="line-through";
            p.style.color="darkgreen";
        });

        todoitem.append(p,deletebtn,editbtn,completebtn);
        todolist.prepend(todoitem);
    }

    function addtodo(){
        const task=inputtask.value.trim();
        if(!task) return;
        todos.unshift(task);
        console.log(todos);
        rendertask(task);
        inputtask.value="";
        inputtask.focus();
    }

    addbtn.addEventListener("click",addtodo);
    inputtask.addEventListener("keydown",function(e){
        if(e.key==="Enter") addtodo();
    });
})();

