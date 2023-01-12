import React from "react";
import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";



 function ExpensesList(props) {
    if(props.item.length===0){
        return <h2 className="expense__alert">No Expense Found</h2>
    }else{
        return (
          <ul>
                <div>{
                    props.item.map((expense)=>(
                        <ExpenseItem  
                        key={expense.id}  
                        name={expense.title}  
                        date={expense.date}  
                        price={expense.amount}/> 
                        ))
                    }
                </div>
          </ul>
        )
    }
}

export default ExpensesList;