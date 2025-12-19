import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `text-md font-medium transition-colors ${
      location.pathname === path
        ? "text-pink-600"
        : "text-slate-600 hover:text-slate-900"
    }`;

  return (
    <nav className="bg-white border-b border-slate-200 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 py-6 flex gap-16">
        <Link to="/" className={linkClass("/")}>
          Snacks
        </Link>

        <Link to="/students" className={linkClass("/students")}>
          Students
        </Link>

        <Link to="/students/create" className={linkClass("/students/create")}>
          Create Student
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
