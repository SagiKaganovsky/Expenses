import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({addExpense}) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        addExpense(expenseData);
    };
    return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>)
}
export default NewExpense;