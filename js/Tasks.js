function Tasks() {
  let tasks = [
    {
      name: "Practice CSS Animations",
      priority: 0,
    },
    {
      name: "Dev community work",
      priority: 2,
    },
    {
      name: "Algorithm Studies",
      priority: 1,
    },
  ];
  // sorting in numerical order
  const descendingTasks = tasks.sort(
    (taskA, taskB) => taskA.priority - taskB.priority
  );

  // delete a task
  const deleteTask = (e) => {
    e.target.parentNode.remove();
    delete descendingTasks[e.target.parentNode.lastChild.id];
  };

  return { deleteTask, descendingTasks, tasks };
}

export { Tasks };
