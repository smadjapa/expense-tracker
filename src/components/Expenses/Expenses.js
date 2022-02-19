import './Expenses.css'
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpensesChart';
import Card from '../UI/Card';
import { useState } from 'react';

const Expenses = (props) => {

    const [year, setYear] = useState('2021');

    const onSelectYearHandler = selectedYear => {
        setYear(selectedYear);

    }

    const filteredExpenses = props.expenses.filter(expense => {
        return year === expense.date.getFullYear().toString();
    });

    return (

        <Card className='expenses'>
            <ExpensesFilter
                onSelectYear={onSelectYearHandler}
                selectedYear={year}
            />
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
        </Card>

    );
}

export default Expenses;