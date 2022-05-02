
const todoForm = document.getElementById("todo-form");
const inputTitle = document.getElementById("title");
const listContainer = document.getElementById("list-container");

let list = [{title: "Dummy Task", done: false,}];

const renderListContainer = () => {
    listContainer.innerHTML = list.map((task, index) =>
    `<li ${task.done && `class="done"`} onClick="clicked(${index})">
        <span><p>${index + 1} : ${task.title}</p></span>
        <span><button onClick="deleteTask(${index})">x</button></span>
    </li>`
)
.join("");
};

// ====================================Delete task
const deleteTask = (inputIndex) => {
  list = list.filter((task, taskIndex) => taskIndex != inputIndex);
  renderListContainer();
};
// ====================================Completed Tasks
const clicked = (inputIndex) => {
  list = list.map((task, taskIndex) =>
    taskIndex == inputIndex ? { ...task, done: !task.done } : task
  );
  renderListContainer();
};

// ====================================Add task
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputTitle.value.trim() === "") {
    alert("Title should not be empty.");
  } else {
   
    list.push({
      title: inputTitle.value.trim(),
      done: false,
    });
    inputTitle.value = "";
    renderListContainer();
  }
});

renderListContainer();