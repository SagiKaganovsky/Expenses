import ExpentseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return (<h2 className='expenses-list__fallback'>No expenses found.</h2>)
    }
    return <ul className='expenses-list'>
        {props.items.map(({ id, title, amount, date }) =>
            <ExpentseItem
                key={id}
                date={date}
                title={title}
                amount={amount} />
        )}
    </ul>

};

export default ExpensesList;