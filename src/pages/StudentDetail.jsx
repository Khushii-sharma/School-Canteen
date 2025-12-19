import { useParams, useNavigate } from "react-router-dom";
import { useContext, useMemo } from "react";
import { CanteenContext } from "../context/CanteenContext";
import { ToastContainer, toast } from 'react-toastify';

function StudentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { studentList, orders } = useContext(CanteenContext);

  const student = studentList.find((s) => s.id === id);

  const studentOrders = useMemo(
    () => orders.filter((od) => od.studentId === id),
    [orders, id]
  );

  const totalSpent = useMemo(
    () => studentOrders.reduce((sum, od) => sum + od.amount, 0),
    [studentOrders]
  );

  const handlePayment = () => {
    toast.success(`Payment of ₹${totalSpent} successful`);
  };

  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        Student not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-800">
              {student.name}
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Referral Code: {student.referralCode}
            </p>
            <p className="text-sm text-slate-500">
              Total Spent: ₹{totalSpent}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors"
            >
              New Order
            </button>

            <button
              onClick={handlePayment}
              disabled={studentOrders.length === 0}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                studentOrders.length === 0
                  ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                  : "bg-emerald-600 text-white hover:bg-emerald-500"
              }`}
            >
              Pay ₹{totalSpent}
            </button>
          </div>
        </div>

        {/* Orders */}
        <h3 className="text-lg font-medium text-slate-700 mb-4">
          Order History
        </h3>

        {studentOrders.length === 0 && (
          <p className="text-slate-500">No orders placed yet.</p>
        )}

        <div className="space-y-4">
          {studentOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
            >
              <p className="font-medium text-slate-800">
                {order.snackName}
              </p>
              <p className="text-sm text-slate-500">
                Quantity: {order.quantity}
              </p>
              <p className="text-sm text-slate-500">
                Amount: ₹{order.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default StudentDetail;
