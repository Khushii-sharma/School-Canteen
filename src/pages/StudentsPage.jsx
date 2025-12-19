import { useContext, useMemo } from "react";
import { CanteenContext } from "../context/CanteenContext";
import { Link } from "react-router-dom";

function StudentsPage() {
  const { studentList, orders } = useContext(CanteenContext);

  const totalByStudent = useMemo(() => {
    return studentList.reduce((acc, s) => {
      acc[s.id] = orders
        .filter((o) => o.studentId === s.id)
        .reduce((sum, o) => sum + o.amount, 0);
      return acc;
    }, {});
  }, [studentList, orders]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Students</h2>

        {studentList.map((s) => (
          <div
            key={s.id}
            className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 mb-4 flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-medium text-slate-800">{s.name}</p>
              <p className="text-sm text-slate-500">
                Referral Code: {s.referralCode}
              </p>
              <p className="text-sm text-slate-500">
                Total Spent: ₹{totalByStudent[s.id]}
              </p>
            </div>

            <Link to={`/students/${s.id}`} className="text-sm text-slate-700 font-medium hover:text-slate-900">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentsPage;
