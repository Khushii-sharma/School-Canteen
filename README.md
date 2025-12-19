# School Canteen App

This is a simple frontend application for a canteen ordering system.  
Students can be added, snacks can be ordered, and order history can be viewed along with total cost.

The project is made using **React (Vite)** and a mock backend using **json-server**.

---

## How to Run the Project

### Step 1: Install dependencies
```bash
npm install
```

### Step 2: Start mock backend
The project uses json-server to simulate backend APIs.
```bash
npx json-server --watch db.json --port 3001
```

This will start the backend at:
`http://localhost:3001`

### Step 3: Start frontend
```bash
npm run dev
```

The app will be available at:
`http://localhost:5173`


## Libraries Used:
- **React** - to build UI components
- **Vite** - for fast development setup
- **React Router DOM** - for page navigation
- **Context API** - for managing global state
- **React Hook Form** - for handling form
- **React Toastify** - for showing success message
- **Tailwind CSS** - for styling
- **json-server** - to mock backend APIs


## Mock Data:
A real backend is not used in this project.
Instead, **json-server** is used with a **db.json** file.
The mock APIs include:
  - Fetching snacks
  - Creating students
  - Placing orders
  - Viewing student details
  
All data is stored locally inside db.json, which makes it easy to test the app without setting up a real server.


### Author:
Khushi | sharmakhushi1501@gmail.com



