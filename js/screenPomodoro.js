import { Tasks } from "./Tasks.js";
import { Counter } from "./Counter.js";

function screenPomodoro() {
  const { deleteTask, descendingTasks, tasks } = Tasks();
  const { handleClick } = Counter();

  let taskContainer = document.querySelector(".task-container");
  const submitButton = document.querySelector(".submit-button");

  const render = () => {
    descendingTasks.forEach((task, index) => {
      const taskBlock = document.createElement("div");
      const deleteIcon = document.createElement("p");
      const title = document.createElement("p");
      const controllerButton = document.createElement("button");

      taskBlock.classList.add("task-block");
      deleteIcon.classList.add("delete-icon");
      controllerButton.classList.add("controller-button");

      deleteIcon.textContent = "☒";
      title.textContent = task.name;
      controllerButton.textContent = "START";

      controllerButton.id = index;
      deleteIcon.addEventListener("click", deleteTask);
      controllerButton.addEventListener("click", () =>
        handleClick(controllerButton)
      );

      taskContainer.append(taskBlock);
      taskBlock.append(deleteIcon, title, controllerButton);
    });
  };

  render();

  const addTask = () => {
    const inputElement = document.querySelector("input");
    const value = inputElement.value;

    if (value) {
      inputElement.value = "";
      taskContainer.textContent = "";
      tasks.push({
        name: value,
        priority: tasks.length,
      });
      render();
    }
  };

  submitButton.addEventListener("click", addTask);

  return { render, submitButton };
}

export { screenPomodoro };
