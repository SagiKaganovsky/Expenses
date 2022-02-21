import ExpentseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
    let expensesContent = <p className='expenses-list__fallback'>No expenses found.</p>;
    if (props.items.length > 0) {
        expensesContent = props.items.map(({ id, title, amount, date }) =>
            <ExpentseItem
                key={id}
                date={date}
                title={title}
                amount={amount} />
        );
    }
    return <ul className='expenses-list'>
        {expensesContent}
    </ul>

};

export default ExpensesList;