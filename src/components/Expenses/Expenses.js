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
    return (
        <div>
            <ExpensesFilter selectedYear={filteredYear} onFilterChange={filterHandler} />
            <Card className="expenses">
                {items.map(({ id, title, amount, date }) =>
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