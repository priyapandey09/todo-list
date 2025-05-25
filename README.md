# 📋 iTask — React Todo App
Welcome to **iTask**, your personal task management app built with **React**. This simple and elegant todo app allows you to keep track of your tasks, mark them as completed, edit them, and delete them as needed — all while persisting your tasks using **localStorage** so your list stays intact even after refreshing the page.  

## ✨ Features
- ✅ Add new todos
- ✅ Edit existing todos
- ✅ Delete tasks
- ✅ Mark tasks as completed
- ✅ Toggle visibility of completed tasks
- ✅ Local storage persistence — tasks are saved between sessions
- ✅ Clean, responsive UI with Tailwind CSS

## 📸 Demo
**With Data** 
![image](https://github.com/user-attachments/assets/ee0cecfb-eb17-49f9-be02-87c6921c1004)

**Without Data**
![image](https://github.com/user-attachments/assets/0fdf1f19-5b3e-4e07-a509-fa7cc3179f34)


## 🚀 Getting Started

### 📦 Prerequisites
- Node.js installed (v14 or higher)
- npm or yarn installed

### 🔧 Installation
**1. Clone the repository**
```bash
git clone https://github.com/yourusername/itask-react.git
cd itask-react
```
**2. Install dependencies**
```bash
npm install
```
or 
```bash
yarn
```
**3. Start the development server**
```bash
npm run dev
```
or 
```bash
yarn dev
```
4. Open your browser and visit http://localhost:5173/ (or whichever port your dev server specifies)

## 📂 Project Structure
```src
todo-list/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── LICENSE
├── package.json
└── README.md
```
## 📖 How It Works
- Add a Todo: Type in your task and click "Save". (Minimum 4 characters required)
- Edit a Todo: Click "Edit" next to a task. The task will populate in the input field — edit it and hit "Save".
- Delete a Todo: Click "Delete" to remove a task.
- Mark as Completed: Use the checkbox to mark a task as done.
- Show/Hide Completed Tasks: Use the "Show Finished" checkbox to toggle visibility of completed tasks.
- All todos are saved in your browser's localStorage.

## 🛠️ Built With
- React
- Vite
- Tailwind CSS
- UUID for unique task IDs
- Local Storage API

## 📌 Future Improvements (Ideas)
- Task due dates and reminders
- Categorization/tags for todos
- Dark mode toggle
- Animations and transitions
- Backend integration with Firebase or a custom API

## 📄 License
This project is open-source and available under the <a href="LICENSE">MIT License</a>.

## 🙌 Acknowledgments
Thanks for checking out iTask — happy tasking! 🚀✨

