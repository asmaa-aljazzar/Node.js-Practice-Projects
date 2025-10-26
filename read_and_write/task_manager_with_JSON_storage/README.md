# Task Manager with JSON Storage

A command-line task management application built with Node.js. This project allows users to **add tasks**, **list tasks**, and **update task status** while storing all data in a JSON file.

---

## 📌 Purpose

The goal of this project is to practice **asynchronous file handling**, **JSON data management**, and **modular code organisation** in Node.js.

---

## ⚡ Features

- **Add Task:** Add a new task with a title.  
- **List Tasks:** Display all tasks with their IDs and statuses.  
- **Mark as Done:** Update a task's status to `"Done"`.  
- **Mark In Progress:** Update a task's status to `"in progress"`.  

---

## 🛠 Usage Overview

Commands are run through the command line:

- `add <task title>` – Adds a new task.  
- `list` – Lists all tasks with their IDs and statuses.  
- `done <id>` – Marks a task as completed.  
- `progress <id>` – Marks a task as in progress.  

> All tasks are stored in a local `tasks.json` file. If the file does not exist, it will be created automatically.

---

## 📂 Structure

- `fileManager.js` – Handles reading from and writing to the JSON file.  
- `taskManager.js` – Contains functions for adding tasks, listing tasks, and updating task statuses.  
- `index.js` – Command-line interface handling user input and calling task functions.  

---

## 🎯 Goal

This project strengthens your understanding of:

- Working with asynchronous file operations in Node.js.  
- Managing structured JSON data.  
- Designing modular and reusable code.  
- Building simple command-line interfaces for practical applications.
