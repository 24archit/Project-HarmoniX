    let todo = [];
    let request = prompt("Enter request to perform: ");
    while(true){
        if(request==quit){
            break;
        }
        else if(request == "list"){
            for(works of todo){
                console.log(works);
            }
        }
        else if(request== "add"){
            let task= prompt("Enter task to be added: ");
            todo.push(task);
        }
        request = prompt("Enter request to perform: ");
    }