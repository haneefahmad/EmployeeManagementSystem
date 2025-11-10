# Employee Management System

A **full-stack Employee Management Application** built using **Spring Boot** (backend) and **React.js** (frontend).  
This system allows HR teams to efficiently manage employee data through a clean, responsive, and user-friendly interface.

---

## Features

### Core Functionalities
- **Create, Read, Update, Delete (CRUD)** operations for managing employee data.  
- **RESTful APIs** for seamless communication between backend and frontend.  
- **Persistent storage** with PostgreSQL database.  
- **Validation and error handling** for all input fields.  

### UI & UX
- **Responsive design** optimized for both desktop and mobile.  
- **Modern React components** with a modular and maintainable architecture.  
- **Dynamic data rendering** using React hooks and state management.  
- **Search and filter** features for quick employee lookup.  

### Backend
- Developed using **Spring Boot** with **Spring Data JPA**.  
- **REST Controller** layer to handle HTTP requests.  
- Integrated with **PostgreSQL** for data persistence.  
- **Service layer** for business logic abstraction.  
- **CORS configuration** for cross-origin frontend-backend communication.

---

## Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js, Axios, React Router, Bootstrap |
| **Backend** | Spring Boot, Spring Web, Spring Data JPA |
| **Database** | PostgreSQL |
| **Tools** | Git, Maven, npm, VS Code, IntelliJ IDEA |

---

## Installation & Setup

### Backend (Spring Boot)
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/employee-management-system.git
   cd employee-management-system/backend
````

2. Configure your PostgreSQL credentials in `application.properties`:

   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/employee_db
   spring.datasource.username=postgres
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   ```
3. Run the backend server:

   ```bash
   mvn spring-boot:run
   ```

   The server will start on `http://localhost:8080`.

---

### Frontend (React.js)

1. Open another terminal and navigate to the frontend folder:

   ```bash
   cd ../frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm start
   ```

   The React app will run on `http://localhost:3000`.

---

## API Endpoints

| Method   | Endpoint              | Description             |
| -------- | --------------------- | ----------------------- |
| `GET`    | `/api/employees`      | Fetch all employees     |
| `GET`    | `/api/employees/{id}` | Get employee by ID      |
| `POST`   | `/api/employees`      | Add a new employee      |
| `PUT`    | `/api/employees/{id}` | Update employee details |
| `DELETE` | `/api/employees/{id}` | Remove an employee      |

---

## Folder Structure

```
employee-management-system/
│
├── backend/                  # Spring Boot Application
│   ├── src/
│   │   ├── main/java/com/example/employeemanagement/
│   │   │   ├── controller/
│   │   │   ├── service/
│   │   │   ├── repository/
│   │   │   └── model/
│   │   └── resources/application.properties
│   └── pom.xml
│
└── frontend/                 # React Application
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   └── App.js
    └── package.json
```

## 👨‍💻 Author

**Haneef Ahmad**
Full Stack Developer
📧 [haneefahmad.2004@gmail.com]
🌐 [GitHub Profile](https://github.com/haneefahmad)

---
