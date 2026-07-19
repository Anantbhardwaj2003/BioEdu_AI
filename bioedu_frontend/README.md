<div align="center">
  <h1>🧬 GeneBoxAI</h1>
  
  <p>
    <b>An advanced, interactive platform for biological education and research.</b>
  </p>

  <div>
    <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&logoColor=white" alt="React" />
    <img src="https://img.shields.io/badge/Vite-latest-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/TypeScript-latest-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/Three.js-latest-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
    <img src="https://img.shields.io/badge/FastAPI-latest-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />
    <img src="https://img.shields.io/badge/PostgreSQL-latest-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  </div>
</div>

<br/>

GeneBoxAI is a full-stack web application combining cutting-edge 3D visualizations, dynamic routing, robust authentication, and comprehensive educational resources designed to make learning complex biological concepts intuitive and engaging.

<details open>
<summary><h2>📑 Table of Contents</h2></summary>

- [🚀 Features](#-features)
- [💻 Tech Stack](#-tech-stack)
- [📂 Project Structure](#-project-structure)
- [🛠️ Getting Started](#️-getting-started)
- [📜 Available Scripts](#-available-scripts)
- [🎯 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

</details>

---

## 🚀 Features

- **Interactive 3D Visualizations**: Explore biological structures with a dynamic, interactive DNA background and custom 3D models using React Three Fiber.
- **Modern UI/UX**: A sleek, responsive, and accessible interface built with Tailwind CSS v4 and Framer Motion for smooth animations.
- **Robust Backend**: A fast and secure backend built with FastAPI, utilizing PostgreSQL for robust data management and JWT-based authentication.
- **AI-Powered Chatbot**: A hybrid conversational chatbot system providing contextual guidance and secure SQL-driven insights.
- **Educational Modules & Certifications**: Access workshops, advanced courses, handle enrollments securely with a payment interface, and generate completion certificates.
- **Dynamic Routing**: Seamless navigation across different sections and detailed workshop pages using React Router.

---

<details>
<summary><h2>💻 Tech Stack (Click to expand)</h2></summary>

### Frontend
| Category       | Technology                                                                |
| -------------- | ------------------------------------------------------------------------- |
| **Framework**  | [React 19](https://react.dev/)                                            |
| **Language**   | [TypeScript](https://www.typescriptlang.org/)                             |
| **Build Tool** | [Vite](https://vitejs.dev/)                                               |
| **Styling**    | [Tailwind CSS v4](https://tailwindcss.com/)                               |
| **Animations** | [Framer Motion](https://motion.dev/)                                      |
| **3D Graphics**| [Three.js](https://threejs.org/) & [React Three Fiber](https://r3f.docs.pmnd.rs/) |
| **Routing**    | [React Router](https://reactrouter.com/)                                  |

### Backend
| Category       | Technology                                                                |
| -------------- | ------------------------------------------------------------------------- |
| **Framework**  | [FastAPI](https://fastapi.tiangolo.com/)                                  |
| **Language**   | [Python](https://www.python.org/)                                         |
| **Database**   | [PostgreSQL](https://www.postgresql.org/)                                 |
| **Authentication**| JWT (JSON Web Tokens)                                                  |
| **AI/Vector DB**| [Qdrant](https://qdrant.tech/)                                         |

</details>

---

<details>
<summary><h2>📂 Project Structure (Click to expand)</h2></summary>

```text
BioEdu_AI/
├── bioedu_frontend/      # React & Vite frontend
│   ├── src/
│   │   ├── assets/       # Static assets (images, icons, 3D models)
│   │   ├── components/   # Reusable UI components (Hero, Navbar, Features, 3D Models)
│   │   ├── data/         # Static data files and constants
│   │   ├── pages/        # Page-level components (Workshops, AdvancedCourses, Auth)
│   │   ├── App.tsx       # Main application routing and layout
│   │   ├── index.css     # Global styles and Tailwind configuration
│   │   └── main.tsx      # Application entry point
│   ├── package.json      # Frontend dependencies
│   └── vite.config.ts    # Vite configuration
│
└── bioedu_backend/       # FastAPI Python backend
    ├── app/              # Main application package
    │   ├── api/          # Route handlers
    │   ├── core/         # Security, config, and core logic
    │   ├── models/       # SQLAlchemy models
    │   └── main.py       # FastAPI application entry point
    ├── requirements.txt  # Python dependencies
    └── .env              # Environment variables (not tracked by git)
```
</details>

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended) and npm/yarn
- **Python** (v3.9 or higher)
- **PostgreSQL** installed and running

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd bioedu_backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   # Windows:
   venv\Scripts\activate
   # macOS/Linux:
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Create a `.env` file in the backend root based on your configuration (Database URL, Secret Key, etc.).
5. Start the FastAPI server:
   ```bash
   uvicorn app.main:app --reload
   ```

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd bioedu_frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the frontend root and set your API URL (e.g., `VITE_API_URL=http://localhost:8000`).
4. Start the development server:
   ```bash
   npm run dev
   ```

The frontend application will be available at `http://localhost:5173` and the backend API at `http://localhost:8000`.

---

<details>
<summary><h2>📜 Available Scripts (Click to expand)</h2></summary>

### Frontend (`bioedu_frontend/`)
- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles TypeScript and builds the app for production.
- `npm run lint`: Runs ESLint for code quality checks.

### Backend (`bioedu_backend/`)
- `uvicorn app.main:app --reload`: Starts the FastAPI development server with hot-reload.

</details>

---

## 🎯 Roadmap

- [x] Initial Project Setup (React + Vite)
- [x] Integrate React Three Fiber for 3D visualizations
- [x] Build secure FastAPI Backend with PostgreSQL
- [x] Implement JWT user authentication
- [x] Create Hybrid Chatbot interface
- [ ] Add more comprehensive biological data sets
- [ ] Implement interactive quizzes for workshops

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
