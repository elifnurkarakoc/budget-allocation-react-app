import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  const currencyLabel = () => {
    switch (currency) {
      case '$':
        return '$ Dollar';
      case '£':
        return '£ Pound';
      case '€':
        return '€ Euro';
      case '₹':
        return '₹ Ruppee';
      default:
        return '';
    }
  };

  const handleCurrency = (currency) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: currency,
    });
  };

  return (
    <div id="currency-menu" className="dropdown dropdown-secondary" style={{ cursor: 'pointer' }}>
      <button
        id="currency-menu-button"
        className="btn dropdown-toggle"
        style={{ backgroundColor: '#93e399', color: '#fff', width: '100%' }}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={() => {
          console.log('here');
          setIsOpen((prev) => !prev);
        }}
      >
        Currency {'('}
        {currencyLabel()}
        {')'}
      </button>
      <ul
        className={`custom-menu dropdown-menu ${isOpen ? 'show' : ''} `}
        style={{ background: '#93e399', width: '100%' }}
      >
        <li>
          <button className="dropdown-item" type="button" onClick={() => handleCurrency('$')}>
            $ Dollar
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button" onClick={() => handleCurrency('£')}>
            £ Pound
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button" onClick={() => handleCurrency('€')}>
            € Euro
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button" onClick={() => handleCurrency('₹')}>
            ₹ Ruppee
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Currency;
