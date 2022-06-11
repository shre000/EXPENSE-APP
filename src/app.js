import React, { useState, useEffect } from "react";
import Expenses from './Components/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
//import axios from 'axios';

let DUMMY_EXPENSE = [ //making of arrays
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    function fetchData() {
        fetch('http://localhost:8080/expenseitem').then(
            response => {
                return response.json();
            }
        ).then(
            data => {
                console.log('success', data);
                setExpenses(data)
            }
        );
    }
    useEffect(() => {
        fetchData();
    }, []);


    const addExpenseHandler = (expense) => {
        const updateExpense = [expense, ...expenses];
        setExpenses(updateExpense);
        fetch('http://localhost:3001/api/insert', {
            method: 'POST',
            body: JSON.stringify(expense),
            headers: {
                'content-Type': 'application/json'
            }
        }).then(
                response => {
                  fetchData();
                }
            );
    };
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
        </div>


    );
}

export default App;
