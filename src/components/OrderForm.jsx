import { useContext, useState } from "react";
import { CanteenContext } from "../context/CanteenContext";

function OrderForm({ snack, onClose }) {
  const { studentList, orders, setOrders } = useContext(CanteenContext);

  const [studentId, setStudentId] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = async () => {
    if (!studentId) return;

    const newOrder = {
      studentId,
      snackId: snack.id,
      snackName: snack.name,
      quantity,
      amount: snack.price * quantity,
    };

    setOrders((prev) => [...prev, newOrder]);

    await fetch("http://localhost:3001/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    });

    onClose();
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 mt-4">
      <h3 className="font-medium mb-2">Order {snack.name}</h3>

      <select
        onChange={(e) => setStudentId(e.target.value)}
        className="border p-2 w-full mb-3"
      >
        <option value="">Select Student</option>
        {studentList.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        min="1"
        max="5"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="border p-2 w-full mb-3"
      />

      <div className="flex gap-2">
        <button
          onClick={handleSubmit}
          disabled={studentList.length === 0}
          className="bg-slate-800 text-white px-4 py-2 rounded"
        >
          Place Order
        </button>
        <button onClick={onClose} className="px-4 py-2 border rounded">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default OrderForm;
