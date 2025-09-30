import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user._id });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title } = req.body;
  const task = await Task.create({ title, user: req.user._id });
  res.json(task);
};

export const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task || task.user.toString() !== req.user._id.toString()) return res.status(404).json({ message: "Not found" });
  task.title = req.body.title || task.title;
  task.completed = req.body.completed ?? task.completed;
  await task.save();
  res.json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task || task.user.toString() !== req.user._id.toString()) return res.status(404).json({ message: "Not found" });
  await task.deleteOne();
  res.json({ message: "Task deleted" });
};
