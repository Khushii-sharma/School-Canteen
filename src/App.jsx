import { Routes, Route } from "react-router-dom";
import SnacksPage from "./pages/SnacksPage";
import StudentsPage from "./pages/StudentsPage";
import StudentDetail from "./pages/StudentDetail";
import Navbar from "./components/Navbar";
import CreateStudent from "./pages/CreateStudent";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<SnacksPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/students/create" element={<CreateStudent />} />
        <Route path="/students/:id" element={<StudentDetail/>} />

      </Routes>
    </>
  );
}

export default App;
