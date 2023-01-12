import React, {useState} from "react";
import "./ExpenseForm.css"

function ExpenseForm(props){
    const [enteredItemTitle , setEnteredItemTitle]=useState("")
    const [enteredItemAmount , setEnteredItemAmount]=useState("")
    const [enteredItemDate , setEnteredItemDate]=useState("")


    // const [userInput , setUserInput] = useState({
    //     title : "",
    //     amount : "",
    //     date : ""

    // })


    let titleChangeHandler = (e)=>{
        setEnteredItemTitle(e.target.value)
        // setUserInput({
        //     // ...userInput,
        //     title : e.target.value,
        //     // amount : "",
        //     // date : ""
        // });

        // setUserInput((prevState)=>{
        //     return {...prevState, title : e.target.value}
        // })
    }
    let amountChangeHandler = (e)=>{
        setEnteredItemAmount(e.target.value)
        // setUserInput({
        //     // ...userInput,
        //     // title : "",
        //     amount : e.target.value,
        //     // date : ""
        // });

        // setUserInput((prevState)=>{
        //     return {...prevState, amount : e.target.value}
        // })

    }
    let dateChangeHandler = (e)=>{
        setEnteredItemDate(e.target.value)

        // setUserInput({
        //     // title : "",
        //     // amount : "",
        //     // ...userInput,
        //     date : new Date(e.target.value),
        // }); 

        // setUserInput((prevState)=>{
        //     return {...prevState, date : new Date(e.target.value)}
        // })
       }

       let formSubmitHandler = (e)=>{
        e.preventDefault();

        const expenseData = {

        title : enteredItemTitle,
        amount : enteredItemAmount,
        date : new Date(enteredItemDate)
        }

        props.onSaveExpenseFormData(expenseData)
        // two way binding to clear the inpur fields after submiting the forms
        setEnteredItemTitle("");
        setEnteredItemAmount("");
        setEnteredItemDate("");

       }
    

    return (
        <form onSubmit={formSubmitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>

                    <input type="text" 
                    value={enteredItemTitle} //two way binding
                     onChange={titleChangeHandler}/>

                </div>

                <div className="new-expense__control">
                    <label>Price</label>

                    <input type="number"
                     value={enteredItemAmount} //two way binding
                     onChange={amountChangeHandler}/>

                </div>

                <div className="new-expense__control">
                    <label>Date</label>

                    <input type="date"
                     value={enteredItemDate} //two way binding
                     onChange={dateChangeHandler}/>

                </div>

                <button className="form-submit-handler" type="submit">Add Expense</button>
            </div>
        </form>
    )

}

export default ExpenseForm;