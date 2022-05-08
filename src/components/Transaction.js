import React, { useContext }  from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transact }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transact.amount < 0 ? '-' : '+';

  return (
    <li className={transact.amount < 0  ? "minus" : "plus"}>
        {transact.text} 
        <span>{sign}${Math.abs(transact.amount)}</span>
        <button className="delete-btn" onClick={() => deleteTransaction(transact.id)}>x</button>
    </li>
  )
}
