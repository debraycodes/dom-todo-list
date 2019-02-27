const form = document.getElementById("todo-form");
const input = document.getElementById("form-input");
const list = document.getElementById("todo-list");
// Create function to add to-do list ite3ms to list
function addTodo(){
  // Create new list item
  let li = document.createElement("LI");
  let p = document.createElement("P");
  let button1 = document.createElement("BUTTON");
  let button2 = document.createElement("BUTTON");
  button1.classList.add("edit-button");
  button2.classList.add("delete-button");
  // Get value from input box and assign to 'p' variable or paragraph
  p.innerHTML = input.value;
  button1.innerHTML = "EDIT";
  button2.innerHTML = "DELETE";
  li.appendChild(p);
  li.appendChild(button1);
  li.appendChild(button2);
  list.appendChild(li);
};
function deleteTodo(e){
  e.preventDefault();
  let parentNode = e.target.parentNode;
  let grandparentNode = parentNode.parentNode;
  grandparentNode.removeChild(parentNode);
}
function editTodo(e){
  e.preventDefault();
  let parentNode = e.target.parentNode;
  let grandparentNode = parentNode.parentNode;
  grandparentNode.removeChild(parentNode);
}
// Add event listener to form
form.addEventListener('submit', function(){
  // Prevent default behavior of form on submit
 event.preventDefault();
 // Call add todo function
 addTodo();
 deleteButtons = document.querySelectorAll(".delete-button");
 deleteButtons.forEach(function(button){
   button.addEventListener("click", deleteTodo);
 });
});
