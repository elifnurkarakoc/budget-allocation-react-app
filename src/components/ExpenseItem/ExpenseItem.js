import React, { useContext } from 'react';

import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../../context/AppContext';

const ExpenseItem = (props) => {
  const { currency, dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  const handleIncreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  const handleDecreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'RED_EXPENSE',
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <FaPlusCircle
          size="1.9em"
          color="#4ead5c"
          style={{ cursor: 'pointer' }}
          onClick={() => handleIncreaseAllocation(props.name)}
        ></FaPlusCircle>
      </td>
      <td>
        <FaMinusCircle
          size="1.9em"
          color="#af1e11"
          style={{ cursor: 'pointer' }}
          onClick={() => handleDecreaseAllocation(props.name)}
        ></FaMinusCircle>
      </td>
      <td>
        <TiDelete
          style={{ cursor: 'pointer' }}
          size="1.5em"
          onClick={handleDeleteExpense}
        ></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
