import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency,  expenses, dispatch } = useContext(AppContext);
    const [editableBudget, setEditableBudget] = useState(budget);

    const handleBudgetChange = (newBudget) => {
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
        if (newBudget >= totalExpenses && newBudget <= 20000) {
            setEditableBudget(newBudget);
            dispatch({ type: 'SET_BUDGET', payload: newBudget });
        } else {
            if (newBudget < totalExpenses) {
                alert("Budget cannot be lower than allocated expenses.");
            } else {
                alert("Budget cannot exceed £20,000.");
            }
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input
                type='number'
                value={editableBudget}
                onChange={(e) => handleBudgetChange(parseInt(e.target.value))}
                step={10}
            />
        </div>
    );
};

export default Budget;
