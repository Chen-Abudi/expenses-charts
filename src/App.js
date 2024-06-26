import React from "react";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import { expenses } from "./data/expenses";

function App() {
  // const expenses = [
  //   {
  //     id: 1,
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: 2,
  //     title: "Groceries",
  //     amount: 37.5,
  //     date: new Date(2021, 5, 14),
  //   },
  //   {
  //     id: 3,
  //     title: "Book",
  //     amount: 12.99,
  //     date: new Date(2021, 8, 10),
  //   },
  //   {
  //     id: 4,
  //     title: "Dining Table",
  //     amount: 59.99,
  //     date: new Date(2020, 3, 5),
  //   },
  // ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem> */}
    </div>
  );
}

export default App;
