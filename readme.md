
# 🍽️ Forkify

<p align="center">
  <strong>A modern recipe web application built with Vanilla JavaScript (ES6+) using the MVC Architecture.</strong>
</p>

<p align="center">
  Search recipes • Bookmark favorites • Upload recipes
</p>

<p align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white)
![Parcel](https://img.shields.io/badge/Bundler-Parcel-21374B)
![Architecture](https://img.shields.io/badge/Architecture-MVC-blue)
![Status](https://img.shields.io/badge/Status-Completed-success)

</p>

---

## 📖 About The Project

Forkify is a modern single-page web application that allows users to discover, save, and manage recipes through an intuitive interface.

The application communicates with the **Forkify API** to retrieve recipe data, provides real-time ingredient calculations based on servings, allows users to bookmark their favorite recipes, and even upload their own recipes.

This project was developed while completing **The Complete JavaScript Course** by **Jonas Schmedtmann**, with the primary goal of mastering modern JavaScript concepts and learning how to structure large-scale applications using the MVC architecture.

---

## 🚀 Live Demo

🔗 **Live Website**

> https://forkify-basha.surge.sh/
---

## 🎥 Demo Video

Watch the application in action:

>https://drive.google.com/file/d/1wl8QQ5KsdK9GCbwYiUq9e9OCWtoX3OTE/view?usp=sharing


---

## ✨ Features

- 🔍 Search recipes instantly
- 📖 View detailed recipe information
- ➕ Increase and decrease servings dynamically
- 🧮 Automatic ingredient quantity updates
- ⭐ Bookmark favorite recipes
- 💾 Persistent bookmarks using Local Storage
- 📤 Upload custom recipes
- 📄 Pagination for search results
- ⚡ Fast rendering
- ⏳ Loading spinner while fetching data
- 🚫 User-friendly error handling

---

## 🛠️ Built With

### Frontend

- HTML5
- SCSS
- Vanilla JavaScript (ES6+)

### JavaScript Concepts

- MVC Architecture
- Modules
- Object-Oriented Programming
- Classes
- Async / Await
- Promises
- Fetch API
- Local Storage
- Error Handling
- State Management
- Event Delegation

### Development Tools

- Parcel Bundler
- npm
- Babel
- Fraction.js

### API

- Forkify API

---

## 🏗️ Project Architecture

The application follows the **MVC (Model–View–Controller)** architecture.

### Model

Responsible for:

- Fetching data from the API
- Managing application state
- Uploading recipes
- Bookmark management

### View

Responsible for:

- Rendering UI
- Updating the DOM efficiently
- Displaying loading spinners
- Displaying success and error messages

### Controller

Responsible for:

- Connecting the Model and Views
- Handling user interactions
- Updating application state
- Coordinating rendering

---

## 📂 Project Structure

```
src
│
├── img
│
├── js
│   ├── config.js
│   ├── controller.js
│   ├── helpers.js
│   ├── model.js
│   │
│   └── views
│       ├── View.js
│       ├── recipeView.js
│       ├── resultsView.js
│       ├── bookmarksView.js
│       ├── paginationView.js
│       ├── searchView.js
│       ├── addRecipeView.js
│       └── previewView.js
│
├── sass
│
└── index.html
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/forkify.git
```

Move into the project

```bash
cd forkify
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm start
```

Create production build

```bash
npm run build
```

---

## 📚 What I Learned

Throughout this project I gained practical experience with:

- Building large JavaScript applications
- Organizing code using MVC Architecture
- Writing modular and reusable code
- Working with asynchronous JavaScript
- Fetching data from REST APIs
- Managing application state
- Updating the UI efficiently
- Persisting data using Local Storage
- Bundling projects with Parcel
- Improving project organization and maintainability

---

## 🎯 Challenges

Some of the interesting challenges during development included:

- Structuring the application using the MVC pattern
- Keeping UI synchronized with application state
- Handling asynchronous API requests
- Updating ingredient quantities dynamically
- Managing bookmarks across browser sessions
- Building reusable view components

---

## 📈 Future Improvements

Possible future enhancements include:

- Dark Mode
- Responsive design
- User authentication
- Meal planner
- Shopping list
- Nutritional information
- Recipe categories
- Search filters
- Offline support
- Progressive Web App (PWA)

---

## 📊 Project Highlights

| Category | Details |
|----------|---------|
| Language | JavaScript (ES6+) |
| Architecture | MVC |
| Styling | SCSS |
| Bundler | Parcel |
| Data Source | Forkify API |
| Storage | Local Storage |

---

## 🤝 Acknowledgements

This project was built while following

**The Complete JavaScript Course**

created by

**Jonas Schmedtmann**

The project focuses on applying modern JavaScript best practices and software architecture principles in a real-world application.

---

## 👨‍💻 Author

**Mohamed Basha**

GitHub:
https://github.com/mohamedemad-basha

LinkedIn:
https://www.linkedin.com/in/mohamed-basha-6239342a8

---
It helps others discover the project and supports my work.
````
