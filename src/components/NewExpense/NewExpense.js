import './NewExpense.css'
import {useState} from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [showNewExpense, setShowNewExpense] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString()
        }
        props.onAddExpense(expenseData);
    }

    const formViewHandler = (status) => {
        setShowNewExpense(status);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onShowFormView={formViewHandler} newExpense={showNewExpense} onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;