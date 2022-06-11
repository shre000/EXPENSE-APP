import React, { useState } from "react";
import './ExpenseForm.css';
// import App from "./app";



function ExpenseForm (props){

    const [enterTitle, setEnteredTitle] = useState('');
    const [enterAmount, setEnteredAmount] = useState('');
    const [enterDate, setEnteredDate] = useState('');

    function titleChangeHandler(event){
        setEnteredTitle(event.target.value);
    }
    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);
    }
    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
    }
    function submitHandler (event){
        event.preventDefault(); //stoping default nature by js avoid refreshing

        const expenseData = { //making of object exoensedata
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        }

        props.onSaveExpenseData(expenseData);

        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
       
    }


    return(
        <form onSubmit={submitHandler}>
            <div className = "new-expense__controls">
                <div className = "new-expense__control">
                    <label>Title</label>
                    <input type="text" value ={enterTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className = "new-expense__control">
                    <label>Amount</label>
                    <input type="number" min ="0.01" step ="0.01" value ={enterAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className = "new-expense__control">
                    <label>Date</label>
                    <input type="date" value ={enterDate} min="1997-01-01" max="2030-12-31" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit"> Add Expense</button>
            </div>
        </form>
    );

}

export default ExpenseForm;