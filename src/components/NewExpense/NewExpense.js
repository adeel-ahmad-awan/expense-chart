import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    setShowForm(false);
    props.onAddExpense(expenseData);
  };

  const cancelExpenseDataHandler = () => {
    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(false);

  const displayNewExpenseFormHandler = () => {
    setShowForm(true);
  };

  if (showForm === true) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelExpenseData={cancelExpenseDataHandler}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense button">
        <button type="button" onClick={displayNewExpenseFormHandler}>
          Add New Expense
        </button>
      </div>
    );
  }
}

export default NewExpense;
