# Student_Management# 🎓 Student Marks Management System (Node.js + Express)

A simple **RESTful API** built using **Node.js** and **Express.js** that helps manage student records — including adding students, listing all students, and calculating their average marks.  
This beginner-friendly project demonstrates the basics of API development using Express and JSON-based data storage.

---

## 🧩 Features

- ➕ **Add Student** – Add new student records with name, roll number, and marks.  
- 📋 **View Students** – Retrieve all stored student data.  
- 📊 **Average Marks** – Calculate and return the average marks of all students.  
- 💾 **Persistent Data** – Uses a local `data.json` file for saving student data (no database setup required).  
- ⚡ **Fast & Lightweight** – Perfect for understanding REST API basics.

---

## ⚙️ Requirements

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Postman](https://www.postman.com/) – for API testing

---

## 🧰 Tech Stack

| Tool | Purpose |
|------|----------|
| **Node.js** | JavaScript runtime for server-side code |
| **Express.js** | Framework to build RESTful APIs |
| **Nodemon** | Auto-restarts the server during development |
| **File System (fs)** | To store data locally in `data.json` |

---

## 🗂️ Project Structure

Student_Management/
├── index.js # Main server file
├── data.json # Local data storage file
├── package.json # Dependencies and scripts
└── README.md # Documentation


---

## 🚀 Getting Started

1️⃣ Clone the repository
```bash
    git clone https://github.com/<your-username>/Student_Management.git
    cd Student_Management

### 2️⃣ Install dependencies
```bash
npm install express body-parser nodemon

3️⃣ Start the development server
npx nodemon
