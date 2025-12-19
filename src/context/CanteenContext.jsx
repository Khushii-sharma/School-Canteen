import { createContext, useEffect, useState } from "react";

export const CanteenContext = createContext();

export function CanteenProvider({ children }) {
  const [studentList, setStudentList] = useState([]);
  const [snackList, setSnackList] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/students")
      .then((res) => res.json())
      .then(setStudentList);

    fetch("http://localhost:3001/snacks")
      .then((res) => res.json())
      .then(setSnackList);

    fetch("http://localhost:3001/orders")
      .then((res) => res.json())
      .then(setOrders);
  }, []);

  return (
    <CanteenContext.Provider
      value={{
        studentList,
        setStudentList,
        snackList,
        setSnackList,
        orders,
        setOrders,
      }}
    >
      {children}
    </CanteenContext.Provider>
  );
}
