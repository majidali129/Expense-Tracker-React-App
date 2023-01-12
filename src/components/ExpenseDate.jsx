import './ExpenseDate.css'

function ExpenseDate(props){
    let month = props.date.toLocaleString("en-US" , {month : 'long'});
    let day = props.date.toLocaleString("en-US" , {day : '2-digit'});
    let year = props.date.getFullYear();
  
    return (
        <div className="expense-item__date">
        <div className='expense-item__month'>{month}</div>
        <div className='expense-item__year'>{year}</div>
        <div className='expense-item__day'>{day}</div>
      </div>
    )
}

export default ExpenseDate;