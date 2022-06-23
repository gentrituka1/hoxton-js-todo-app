// - Start this project from scratch, write whatever HTML, CSS & JS you need
// - Create a state object
// - Create action functions that update state
// - Create render functions that read from state

let state = [
    { title: "Go shopping", completed: false },
    { title: "Go to the gym", completed: false },
    { title: "Go to the movies", completed: false },
]
    

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
    checkbox.type = "checkbox"
    checkbox.name = "checkbox"

    checkboxDiv.append(pEl1, checkbox)

    let secondH3Element = document.createElement("h3")
    secondH3Element.textContent = "ADD ITEM"
    secondH3Element.className = "header-3"

    let addItemDiv = document.createElement("div")
    addItemDiv.className = "add-item-div"

    let addItemInput = document.createElement("input")
    addItemInput.type = "text"
    addItemInput.name = "add-item"

    let pEl2 = document.createElement("p")
    pEl2.textContent = "Add item"

    addItemDiv.append(pEl2, addItemInput)

    let thirdH3Element = document.createElement("h3")
    thirdH3Element.textContent = "TODO"
    thirdH3Element.className = "header-3"

    let todoListDiv = document.createElement("div")
    todoListDiv.className = "todo-list-div"

    let todoListUl = document.createElement("ul")
    todoListUl.className = "todo-list"

    pEl2.addEventListener("click", function(){
        let inputValue = addItemInput.value
            let newTodo = {
                title: inputValue,
                completed: false}
            state.todos.push(newTodo)
            render()
    })

    for (let element of state){
    let todoListLi = document.createElement("li")
    todoListLi.className = "todo-items"

    let todoItemsInput = document.createElement("input")
    todoItemsInput.type = "checkbox"
    todoItemsInput.name = "checkbox"

    let todoItemsSpan = document.createElement("span")
    todoItemsSpan.textContent = element.name

    let todoItemsDelete = document.createElement("button")
    todoItemsDelete.textContent = "Delete"

    todoListLi.append(todoItemsInput, todoItemsSpan, todoItemsDelete)
    todoListUl.append(todoListLi)
    }
    todoListDiv.append(todoListUl)



    let fourthH3Element = document.createElement("h3")
    fourthH3Element.textContent = "COMPLETED"
    fourthH3Element.className = "header-3"

    let completedTodoListUl = document.createElement("ul")
    completedTodoListUl.className = "completed-todo-list"

    for (let element of state){
        if (element.completed === true){
            let completedTodoListLi = document.createElement("li")
            completedTodoListLi.className = "completed-todo-items"

            let completedTodoItemsInput = document.createElement("input")
            completedTodoItemsInput.type = "checkbox"

            let completedTodoItemsSpan = document.createElement("span")
            completedTodoItemsSpan.textContent = element.name

            let completedTodoItemsDelete = document.createElement("button")
            completedTodoItemsDelete.textContent = "Delete"

            completedTodoListLi.append(completedTodoItemsInput, completedTodoItemsSpan, completedTodoItemsDelete)
            completedTodoListUl.append(completedTodoListLi)
        }
    }

    containerDiv.append(firstH3Element, checkboxDiv, secondH3Element, addItemDiv, thirdH3Element, todoListDiv, fourthH3Element, completedTodoListUl)
    document.body.append(containerDiv)
}   

render();

