import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';


const NewExpense = (props)=>{
    
    const expenseDataHandler = data=>{
        const dataSaved = {
            id: Math.random().toString(),
            ...data,
            
        }

        props.onExpense(dataSaved)
    }


    return (

        <div className="new-expense">
            <ExpenseForm onExpenseData = {expenseDataHandler}/>

        </div>
    )
}

export default NewExpense;