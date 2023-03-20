import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);

    setForm(<button onClick={showForm}>Add Expense</button>);
  };

  let closeForm = () => {
    setForm(<button onClick={showForm}>Add Expense</button>);
  };

  let showForm = () => {
    setForm(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} event={closeForm} />);
  };

  let [form, setForm] = useState(<button onClick={showForm}>Add Expense</button>);
  
  return <div className="new-expense">{form}</div>;
};

export default NewExpense;
