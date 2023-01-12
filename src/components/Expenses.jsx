import React, {useState} from 'react'
import ExpenseChart from './ExpenseChart'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'


function Expenses (props){
  // console.log(props)
    // const expenses = [
    //     {
    //       title : "Water Bottle",
    //       price : 115.00,
    //       date : new Date(2022,10,9)
    //     },
    //     {
    //       title : "Laptop Bag",
    //       price : 1540,
    //       date : new Date(2022,12,23)
    //     },
    //     {
    //       title : "Honda Civic Car",
    //       price : 200000,
    //       date : new Date(2022,5,29)
    //     },
    //     {
    //       title : "University Fee",
    //       price : 40000,
    //       date : new Date(2022,2,15)
    //     }
    //   ]

      const [filteredYear , setFilteredYear] = useState("")

      const filterChangeHandler = (selectedYear)=>{
        setFilteredYear(selectedYear)
      }

      const filteredExpense = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
      });
      
     

    return(
        <div className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>

        <ExpenseChart expenses={filteredExpense}/>
        
        <ExpensesList item={filteredExpense}/>
        
        {/* {filteredExpense.map((expense)=>
          (
            <ExpenseItem
            key={expense.id}
            name={expense.title}
            date={expense.date}
            price={expense.amount}/>
 
          )
        )} */}


         {/* <ExpenseItem name={expenses[0].title}  date={expenses[0].date} price={expenses[0].price} />
        // <ExpenseItem name={expenses[1].title}  date={expenses[1].date} price={expenses[1].price}/>
        // <ExpenseItem name={expenses[2].title}  date={expenses[2].date} price={expenses[2].price}/>
        // <ExpenseItem name={expenses[3].title}  date={expenses[3].date} price={expenses[3].price}/> */}
        </div>
    )
}

export default Expenses 