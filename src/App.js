import './App.css';
import Expenses from "./components/Expenses";
import NewExpense from "./expenses/NewExpense";
import { useState } from 'react';

const DummyData = [
  {
    id : "asdf",
    title : "Water Bottle",
    amount : 115.00,
    date : new Date(2022,10,9)
  },
  {
    id : "fdas",
    title : "Laptop Bag",
    amount : 1540,
    date : new Date(2021,10,10)
  },
  {
    id : "sdaf",
    title : "Honda Civic Car",
    amount : 200000,
    date : new Date(2020,5,29)
  },
  {
    id : "dfas",
    title : "University Fee",
    amount : 40000,
    date : new Date(2019,2,15)
  }
]


function App() {
  const [oldExpense , setOldExpense]= useState(DummyData)

  const newExpenseDataHandler = (expense)=>{
    // console.log(newExpenseData)
    // return expense;
    // setOldExpense([expense , ...oldExpense])
    setOldExpense((prevExpense)=>{   // i use this method to preserve the all previous states because it depends upon the previous state
      return [expense , ...prevExpense]
    })
  };


  return (
    <div >
      <NewExpense newExpenseData={newExpenseDataHandler} /> 
      <Expenses item={oldExpense}/>
    </div>
  );
}

export default App;
