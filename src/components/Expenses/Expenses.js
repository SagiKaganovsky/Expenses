import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';

const Expenses = ({ items }) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterHandler = (value) => {
        setFilteredYear(value);
    }
    const filteredExpenses = items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selectedYear={filteredYear}
                    onFilterChange={filterHandler} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;