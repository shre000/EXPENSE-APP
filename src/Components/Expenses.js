import React from "react";
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses  (props){
    return (
        <div className = "expenses">

            {
                props.item.map(
                    expense => (   
                    <ExpenseItem
                        key={expense.id }
                        date={expense.date}  // passing the data as a variable
                        title={expense.title}
                        amount={expense.amount}/>
                    )
                )
            }
        
          
        </div>
    )
}
export default Expenses;