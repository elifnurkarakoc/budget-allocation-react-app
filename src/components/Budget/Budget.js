import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const BUDGET_MAX_LIMIT_VALUE = 20000;

const Budget = () => {
  const { budget, totalExpenses, currency, dispatch } = useContext(AppContext);

  const onChangeBudgetHandler = (event) => {
    const value = Number(event.target.value);

    if (!Number.isInteger(value)) {
      alert('Please enter an integer number.');
      return;
    }

    if (Number.isNaN(value)) {
      alert('Please enter a valid number.');
      return;
    }

    if (value < totalExpenses) {
      alert("You can't reduce the budget value lower than the spending");
    } else {
      if (value > BUDGET_MAX_LIMIT_VALUE) {
        alert('Please enter a value less that ' + BUDGET_MAX_LIMIT_VALUE);
        return;
      }

      dispatch({
        type: 'SET_BUDGET',
        payload: value,
      });
    }
  };

  return (
    <div
      className="alert alert-secondary"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <div>
        <label htmlFor="budget"> Budget:</label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>{currency}</span>
        <input
          required="required"
          type="number"
          id="budget"
          value={budget}
          step="10"
          onChange={onChangeBudgetHandler}
        ></input>
      </div>
    </div>
  );
};

export default Budget;
