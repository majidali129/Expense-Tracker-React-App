import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
 
 function ExpenseItem(props) {
  // console.log("Name Changed")

  // let itemName = props.name;

  // const [enteredItemName , setEnteredItemName ] = useState(itemName);

  // let stateChanger = ()=>{
  //   setEnteredItemName("Abdul Haseeb");
  // }


  
  return (
    <div className="expense-item">
      <ExpenseDate date ={props.date}/>
        <div className="expense-item__description">
            <h2>{props.name}</h2>
            <div className="expense-item__price">${props.price}</div>
            {/* <button >Change State</button> */}
        </div>
    </div>
  )
}

export default ExpenseItem;
