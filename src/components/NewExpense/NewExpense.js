import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

import './NewExpense.css';

const NewExpense = ({ addExpense, closeForm }) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        addExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (<div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>)
}
export default NewExpense;