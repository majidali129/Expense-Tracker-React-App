import React from "react"
import ExpenseForm from "./ExpenseForm"


function NewExpense(props){
    const expenseFormDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        props.newExpenseData(expenseData)
    }

    return(
        <div>
             <ExpenseForm onSaveExpenseFormData={expenseFormDataHandler}/>
        </div>
    )
}

export default NewExpense 