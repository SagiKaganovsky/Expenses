import ExpentseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
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
    }
    )
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selectedYear={filteredYear}
                    onFilterChange={filterHandler} />
                {filteredExpenses.map(({ id, title, amount, date }) =>
                    <ExpentseItem
                        key={id}
                        date={date}
                        title={title}
                        amount={amount} />
                )}
            </Card>
        </div>
    )
}

export default Expenses;