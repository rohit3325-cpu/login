import React from "react";

const TaskCard = ({ task, onUpdate, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-center mb-2">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onUpdate({ ...task, completed: !task.completed })}
          className="mr-2"
        />
        <span className={task.completed ? "line-through text-gray-400" : ""}>{task.title}</span>
      </div>
      <button onClick={() => onDelete(task._id)} className="text-red-500">Delete</button>
    </div>
  );
};

export default TaskCard;
