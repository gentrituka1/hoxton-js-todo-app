// - Start this project from scratch, write whatever HTML, CSS & JS you need
// - Create a state object
// - Create action functions that update state
// - Create render functions that read from state

let state = {
    todos: [
        { title: "Go shopping", completed: false },
        { title: "Go to the gym", completed: false },
        { title: "Go to the movies", completed: false },
    ],
    showChecked: false
}
    
            

function render(){
   document.body.textContent = ""

   let containerDiv = document.createElement("div")
    containerDiv.className = "container"

   let firstH3Element = document.createElement("h3")
    firstH3Element.textContent = "OPTIONS"
    firstH3Element.className = "header-3"

    let checkboxDiv = document.createElement("div")
    checkboxDiv.className = "checkbox-div"

    let pEl1 = document.createElement("p")
    pEl1.textContent = "Show completed"

    let checkbox = document.createElement("input")
    checkbox.className = "checkbox"
    checkbox.type = "checkbox"
    checkbox.name = "checkbox"
    checkbox.addEventListener("change", function(){
        state.showChecked = !state.showChecked
        render()
    })

    checkboxDiv.append(checkbox, pEl1)

    let secondH3Element = document.createElement("h3")
    secondH3Element.textContent = "ADD ITEM"
    secondH3Element.className = "header-3"

    let addItemDiv = document.createElement("div")
    addItemDiv.className = "add-item-div"

    let addItemInput = document.createElement("input")
    addItemInput.type = "text"
    addItemInput.name = "add-item"

    let pEl2 = document.createElement("p")
    pEl2.className = "add-item-style"
    pEl2.textContent = "Add item"

    addItemDiv.append(addItemInput, pEl2)

    let thirdH3Element = document.createElement("h3")
    thirdH3Element.textContent = "TO DO"
    thirdH3Element.className = "header-3"

    let todoListDiv = document.createElement("div")
    todoListDiv.className = "todo-list-div"

    let todoListUl = document.createElement("ul")
    todoListUl.className = "todo-list"

    pEl2.addEventListener("click", function(){
        if(addItemInput.value !== ""){
        let inputValue = addItemInput.value
            let newTodo = {
                title: inputValue,
                completed: false}
            state.todos.push(newTodo)
            render()
        }
    })


    for (let element of state.todos){

        if(element.completed === false){
        let todoListLi = document.createElement("li")
        todoListLi.className = "todo-items"

        let todoItemsInput = document.createElement("input")
        todoItemsInput.className = "checkbox"
        todoItemsInput.type = "checkbox"
        todoItemsInput.name = "checkbox"
        todoItemsInput.addEventListener("change", function(){
            element.completed = !element.completed
            render()
        })

        let todoItemsSpan = document.createElement("span")
        todoItemsSpan.textContent = element.title

        let todoItemsDelete = document.createElement("button")
        todoItemsDelete.textContent = "Delete"
        todoItemsDelete.addEventListener("click", function(){
            state.todos.splice(state.todos.indexOf(element), 1)
            render()
        })

        todoListLi.append(todoItemsInput, todoItemsSpan, todoItemsDelete )
        todoListUl.append(todoListLi)
        }

        
        
    }

    let deleteAllItemsDiv = document.createElement("div")
    deleteAllItemsDiv.className = "delete-all-button-div"

    let deleteAllItems = document.createElement("button")
        deleteAllItems.className = "delete-all-button"
        deleteAllItems.textContent = "Delete All"
        deleteAllItems.addEventListener("click", function(){

            state.todos = []
            render()
        })
    deleteAllItemsDiv.append(deleteAllItems)
    todoListDiv.append(todoListUl, deleteAllItemsDiv)

    let completedTodoListUl = document.createElement("ul")
    completedTodoListUl.className = "completed-todo-list"


    if(state.showChecked){ 
            checkbox.checked = true
            let fourthH3Element = document.createElement("h3")
            fourthH3Element.textContent = "COMPLETED"
            fourthH3Element.className = "header-3"

            
            
            completedTodoListUl.append(fourthH3Element)
    }
    

    for (let element of state.todos){
        if (element.completed === true && state.showChecked){
            let completedTodoListLi = document.createElement("li")
            console.log(element)
            completedTodoListLi.className = "completed-todo-items"

            let completedTodoItemsInput = document.createElement("input")
            completedTodoItemsInput.type = "checkbox"
            completedTodoItemsInput.className = "checkbox"
            completedTodoItemsInput.addEventListener("change", function(){
                element.completed = !element.completed
                render()
            })

            let completedTodoItemsSpan = document.createElement("span")
            completedTodoItemsSpan.textContent = element.title

            let completedTodoItemsDelete = document.createElement("button")
            completedTodoItemsDelete.textContent = "Delete"

            completedTodoListLi.append(completedTodoItemsInput, completedTodoItemsSpan, completedTodoItemsDelete)
            completedTodoListUl.append(completedTodoListLi)
            completedTodoItemsDelete.addEventListener("click", function(){
                state.todos.splice(state.todos.indexOf(element), 1)
                render()
            })
        }
    }

    containerDiv.append(firstH3Element, checkboxDiv, secondH3Element, addItemDiv, thirdH3Element, todoListDiv, completedTodoListUl)
    document.body.append(containerDiv)
}   

render();

