import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import TaskCard from "../components/TaskCard.jsx";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await axios.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => { fetchTasks(); }, []);

  const createTask = async (e) => {
    e.preventDefault();
    const res = await axios.post("/tasks", { title });
    setTasks([...tasks, res.data]);
    setTitle("");
  };

  const updateTask = async (task) => {
    const res = await axios.put(`/tasks/${task._id}`, task);
    setTasks(tasks.map((t) => (t._id === res.data._id ? res.data : t)));
  };

  const deleteTask = async (id) => {
    await axios.delete(`/tasks/${id}`);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <form onSubmit={createTask} className="flex mb-4">
        <input
          type="text"
          placeholder="New task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded-r">Add</button>
      </form>
      <div>
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} onUpdate={updateTask} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
