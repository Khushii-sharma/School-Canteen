import { useContext } from "react";
import { useForm } from "react-hook-form";
import { CanteenContext } from "../context/CanteenContext";

function CreateStudent() {
  const { setStudentList } = useContext(CanteenContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:3001/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        referralCode: "REF" + Math.floor(Math.random() * 1000),
        totalSpent: 0,
        orders: [],
      }),
    })
      .then((res) => res.json())
      .then((newStudent) => {
        setStudentList((prev) => [...prev, newStudent]);
        reset();
      });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-start justify-center">
      <div className="w-full max-w-md mt-20 bg-white border border-slate-200 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-slate-800 mb-4 text-center">
          Create Student
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("name", { required: true })}
            placeholder="Student Name"
            className="w-full border border-slate-300 rounded-lg px-3 py-2"
          />

          <button
            type="submit"
            className="w-full bg-slate-800 text-white py-2 rounded-lg"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateStudent;
