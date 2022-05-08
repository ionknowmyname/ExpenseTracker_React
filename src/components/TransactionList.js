import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction';

export const TransactionList = () => {
    // const context = useContext(GlobalContext);
    const { transactions } = useContext(GlobalContext); // destructuring context to get transactions

    // console.log(context);
    // console.log(context.transactions);

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transact={transaction} />
                ))}    
            </ul>
        </>
    )
}
